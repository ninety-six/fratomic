'use strict';

/*
 * Require the path module
 */
const path = require('path');

/*
 * Set the UI Library root path
 */
const uiLibRoot = __dirname + '/';

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', '[ENTER PROJECT NAME] UI Component Library');

/*
 * Other project metadata.
 */
fractal.set('project.version', 'v1.0');
fractal.set('project.repository', '[ENTER REPOSITORY URL]');
fractal.set('project.author', '[ENTER AUTHOR NAME]');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', uiLibRoot + 'components');

/*
 * Require the Twig adapter
 */
const twigAdapter = require('@frctl/twig')();

fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

/*
 * Define potential Statuses for components.
 */
fractal.components.set('statuses', {
    prototype: {
        label: "Prototype",
        description: "Do not implement",
        color: "#FF4136"
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution",
        color: "#FFDC00"
    },
    ready: {
        label: "Ready",
        description: "Ready to implement",
        color: "#2ECC40"
    },
    exported: {
        label: "Exported",
        description: "Exported to the working project",
        color: "#01FF70"
    }
});

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', uiLibRoot + 'docs');

/*
 * Define potential Statuses for documentation pages.
 */
fractal.docs.set('statuses', {
    draft: {
        label: "Draft",
        description: "This documentation is not complete",
        color: "#FF4136"
    },
    published: {
        label: "Published",
        description: "Documentation complete",
        color: "#2ECC40"
    }
});

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', uiLibRoot + 'dist');
 
/*
 * Set the static HTML build destination. This can be used to export the
 * web UI view into static HTML files, which can quickly and easily be shared
 * with clients or hosted using a simple static file server.
 */
fractal.web.set('builder.dest', uiLibRoot + 'build');


/* Fractal Export Command
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const fs = require('fs');

/*
 * Exports all view templates into a directory in the root of the project.
 * Templates are exported in a flat structure with the filenames in the format of {handle}.{ext}
 *
 * Any @handle references in the templates (for partial includes etc) are re-written
 * to reference the appropriate template path.
 *
 * Run by using the command `fractal export` in the root of the project directory.
 */
function exportTemplates(args, done) {

    const app = this.fractal;
    const items = app.components.flattenDeep().toArray();
    const jobs = [];

    for (const item of items) {

        const exportPath = path.join('./', args.options.output || 'exported', `${item.alias || item.handle}${app.get('components.ext')}`);
        
        if (item.status.label === 'Exported') {
            const job = item.getContent().then(str => {
                return str.replace(/\@([0-9a-zA-Z\-\_]*)/g, function(match, handle){
                    return `${handle}${app.get('components.ext')}`;
                });
            }).then(str => {
                return fs.writeFileSync(exportPath, str);
            });

            jobs.push(job);
        }
    }
    
    return Promise.all(jobs);
}

fractal.cli.command('export', exportTemplates,  {
    description: 'Export all component templates',
    options: [
        ['-o, --output <output-dir>', 'The directory to export components into, relative to the CWD.'],
    ]
});


/* Fractal Web UI Theme
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
 * Require the Mono subtheme module built upon the default Mandelbrot theme
 * Run npm install --save mono within your project directory
 * before you can require() it.
 */

const webUITheme = require('mono-fractal')({
    styles: ['default', '/webui-overrides/overrides.css']
});

/*
 * Specify a directory to hold the theme override templates
 * See https://github.com/frctl/mandelbrot/tree/master/views for examples of default templates
 */
webUITheme.addLoadPath(uiLibRoot + 'dist/webui-overrides');

/*
 * Tell Fractal to use the configured theme by default
 */
fractal.web.theme(webUITheme);
