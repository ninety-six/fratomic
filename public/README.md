## Configuration

**Note** - On Windows, a conflicting command-line application prevents you from running Fractal commands from a project's root directory (where your ```fractal.js``` config file would live). To work around this the Fractal config file has been renamed to ```fractal.config.js``` in the ```package.json``` file.

### UI Library Root

If you wish to include your Fractal UI component library within a bigger project you can create, for example, a folder called ```ui-lib``` and add the folders from this starter project to it before changing the root in the ```fractal.config.js``` like:

```Shell
const uiLibRoot = __dirname + '/ui-lib/';
```

## Running Fractal

```Shell
fractal start --sync
```

This starts up a Fractal development server. Load up the local URL displayed in your terminal window (most likely to be http://localhost:3000).

If everything has worked correctly you will be able to browse the starter project.

### Other Commands

```Shell
fractal export --output dist/twig
```

This command will gather up all the template markup in your Fractal component library with the status of 'Exported' and place a copy of each .twig file in the ```dist/twig/``` directory. This can be quite useful if you want to package up & publish your component markup.

```Shell
fractal build
```

This command will package up your complete Fractal UI library and convert it to a standalone publishable site in HTML. This tool will rarely be used but is still quite useful.

## Directories Explained

* ```build/``` - publishable HTML version of complete Fractal library 
* ```components/``` - Fractal library 'building block' components structured using Atomic Design principles. Go [here](https://fractal.build/guide/components/) to find out more about components.
* ```dist/``` - directory containing all compiled styling, scripts and other 'production ready' frontend resources ready to be distributed/published
    * ```css/``` - compiled CSS files
    * ```font/``` - any fonts used
    * ```img/``` - images used in the projects styling
    * ```js/``` - compiled JavaScript files
    * ```twig/``` - 'production ready' template markup of components in Twig
    * ```vendor/``` - external third party CSS or JS files and resources (eg. Animate.css, jQuery)
    * ```webui-overrides/``` - markup and styles used to override Fractal's Mono theme
* ```docs/``` - Fractal library documentation pages in markdown format. Go [here](https://fractal.build/guide/documentation/) to find out more about documentation.
* ```src/``` - directory containing Sass and JavaScript files to be compiled into the appropriate folders in the 'dist' directory.

## Working with Components

You will need to link to your stylesheets & scripts within the ```dist``` folder. For example:

```Shell
<link rel="stylesheet" href="{{ path ~ '/css/style.min.css' }}">
```

```path``` has already been set to the ```dist``` directory in the ```fractal.config.js``` file.
