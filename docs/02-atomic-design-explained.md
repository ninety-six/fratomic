---
title: Atomic Design Explained
status: draft
---
Atomic Design is a methodology for creating design systems. In chemistry, atoms bond together to form molecules, which in turn combine into more complex organisms to ultimately create all matter in our universe. This same principle can be appllied to building web components. We can break entire interfaces down into fundamental building blocks and work up from there.

Working this way promotes consistency and scalability while simultaneously showing things in their final context.

There are five distinct levels in Atomic Design:

## ![Atom](/mono-theme/img/icon-atoms.svg "Atom") Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

## ![Molecule](/mono-theme/img/icon-molecules.svg "Molecule") Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.

## ![Organism](/mono-theme/img/icon-organisms.svg "Organism") Organisms

Organisms are groups of molecules and atoms joined together to form a relatively complex, distinct section of an interface.

## ![Template](/mono-theme/img/icon-templates.svg "Template") Templates

Templates are groups of organisms stitched together to form a generic 'full page' component that can be used more than once across your project. For example, a Post template to output blog articles.

## ![Page](/mono-theme/img/icon-pages.svg "Page") Pages

Pages are specific, 'bespoke' instances of templates like a homepage.

Go [here](http://bradfrost.com/blog/post/atomic-web-design/) to find out more about Atomic Design.