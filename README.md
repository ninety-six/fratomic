# Fractal Atomic

An awesome starter point for your Fractal UI component library.

[Fractal](https://fractal.build/) is a fantastic tool for building, maintaining and cataloging the various components used to construct a design system, website or software project.

This starting point has been developed to adhere to the principles of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), containing Atoms, Molecules, Organisms, Templates and Pages for you to style & use 'out of the box' as well as aid you in defining your own components. Some skeleton documentation pages have been added too.

Keep what you need, delete what you don't and add whatever you like on top of whats already there.

![Fractal Atomic using Mono screenshot](screenshot.jpg "Fractal Atomic using Mono screenshot")

## Features

* Component folder structure based on Atomic Design principles designed to work with Fractal
* Use of [Twig](https://twig.symfony.com/) as the templating engine
* Component configuration files in JSON format
* Markup, config and markdown files for typography, buttons, form elements and tables included
* Statuses for components & documentation pages improved
* Template export function included
* Uses the [Mono](https://github.com/AccentDesign/Mono) theme 'out of the box'

## Installing

1. Click the 'Clone or download' button above
2. Click the 'Download ZIP' button
3. Once the download is complete, unpack the ZIP file to an appropriate location
4. From inside the directory root, run ```npm install```
5. You're now ready to configure your starter project

## Configuration

**Note** - On Windows, a conflicting command-line application prevents you from running Fractal commands from a project's root directory (where your ```fractal.js``` config file would live). To work around this the Fractal config file has been renamed to ```fractal.config.js``` in the ```package.json``` file.

### UI Library Root

If you wish to include your Fractal UI component library within a bigger project you can create, for example, a folder called ```ui-lib``` and add the folders from this starter project to it before changing the root in the ```fractal.config.js``` like:

```Shell
const uiLibRoot = __dirname + '/ui-lib/';
```

### Project Information

In the config file, change ```PROJECT NAME```, ```REPOSITORY URL```, and ```AUTHOR NAME``` to the appropriate information for your project.

## Running Fractal

```Shell
fractal start --sync
```

This starts up a Fractal development server. Load up the local URL displayed in your terminal window (most likely to be http://localhost:3000).

If everything has worked correctly you will be able to browse the starter project.

### Other Commands

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

## Working with Components

Enter an appropriate ```PROJECT NAME``` in the ```<title>``` element of all ```_preview.twig``` files within the ```components``` directory.

You will also need to link to your stylesheets & scripts within the ```dist``` folder. For example:

```Shell
<link rel="stylesheet" href="{{ path ~ '/css/style.min.css' }}">
```

```path``` has already been set to the ```dist``` directory in the ```fractal.config.js``` file.