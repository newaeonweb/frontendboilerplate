Front-end Boilerplate. 
=====================
Because repeating yourself is suck. [![Build Status](https://travis-ci.org/newaeonweb/frontendboilerplate.svg?branch=master)](https://travis-ci.org/newaeonweb/frontendboilerplate) 
[![devDependency Status](https://david-dm.org/newaeonweb/frontendboilerplate/dev-status.svg)](https://david-dm.org/newaeonweb/frontendboilerplate#info=devDependencies)
[![Dependency Status](https://david-dm.org/newaeonweb/frontendboilerplate.svg)](https://david-dm.org/newaeonweb/frontendboilerplate)

![Alt text](https://github.com/newaeonweb/frontendboilerplate/blob/gh-pages/images/Frontend-Boilerplate-2014-12-01-12-06-17.jpg "Frontend Boilerplate")

> Modular, easy to use boilerplate for building web applications

## Introduction
*Frontend Boilerplate* is a simple `Gruntfile` and directory structure for an easy starting point with web applications using: Grunt and Bower.
It is designed to give you a quick and organized way to start developing web apps with best practices in mind.

#### Preface

As a developer, everytime you need to start a new web project you must follow the same steps.
Write a lot of JavaScript code, using a CSS pre-processor, start a server, open your browser to see the page, go
back to the editor made some changes, go back to the browser e repeat this flow many, many times a day. 
For this we created this repository to collect the best practice around the web community and put all together
in one place. Be cool, share your experience too.

####  Disclaimer
All code here are based on lessons learned and good practices, however many of them are fruits of research in several blog, tutorials, lectures and other sources.

#### License
[MIT]()

---

## Getting Started

To get you started you can simply clone or download the repository and install the dependencies, very simple!
[Quick start](#grunt-commands-available).

Also you can using the [Yeoman Generator](https://github.com/newaeonweb/generator-frontendboilerplate) to start even fast.

## Prerequisites

You need [Git](http://git-scm.com/) to clone the repository.

Also you must have [Node.js](http://nodejs.org/) and its package manager (npm) installed. 

And [Bower](http://bower.io/) the package manager

## Installing frontendboilerplate

Clone the repository using git:

```
git clone https://github.com/newaeonweb/frontendboilerplate.git
cd frontendboilerplate
```

If you just want to start from zero commit history, you need to do:

```bash
git clone --depth=1 https://github.com/newaeonweb/frontendboilerplate.git <your-project-name>
```

> The `depth=1` tells git to only pull down one commit worth of historical data.

#### Install Dependencies
Open your Terminal window inside the project folder and type the following command:

```
npm install

```
  
> The npm command will install all the dependencies listed on package.json file.

Your application is ready to go

## Troubleshooting
The step-by-step is very simple but if you find some issue please let us know at: [issues](https://github.com/newaeonweb/frontendboilerplate/issues).

---

## Application Directory Layout
We propose a folder structure for web projects from the scratch, because all web projects have CSS, JS and Images folders.

```
	assets/					--> all of the files to be used in production
		css					--> css files
		fonts				--> Font-face folder
		images				--> image files
		js/					--> javascript files
			vendor 			--> third party libraries copied from src/vendor
	lib/					--> 3rd party bower libraries
	src/					--> scripts for development
		scripts/			--> hand made JavaScript files, plugins and others
		preprocessor/		--> your choice for Sass or Less
		vendor/				--> third party libraries like: respond, mçodernizer
	test					--> test source files and libraries
		mocha				--> mocha folder structure for visual test results
			css/			
				mocha.css
			js/				--> testing frameworks file
				chai.js
				mocha.js
		spec				--> specs for testing
			app-test.js		--> example on how to write tests
		test.html			--> visual page for tests
	index.html				--> base layout file
	Gruntfile.js			--> where the magic happens
```

## Grunt commands available

_Development_:

```
grunt dev

```

This command will run two tasks:

- connect
- watch

Using the *concurrent* and *livereload* plugins.

_Linters_:

```
grunt lint

```

This command will run two tasks:

- jshint
- csshint

_CSS_:

```
grunt less
grunt sass

```
> Using `less` task will compile *less* files, using `sass` task will compile *sass* files.


_Test_:

```
grunt test

```

This command will run one task:

- mocha

_Build_:

```
grunt build

```

This command will run four tasks:

- lint
- concat
- uglify
- test
	
#### Helpers Tasks

_Bower_:

```
grunt bower

```

Grunt will install all bower dependencies from the `bower.json` file.


_Injector_:

```
grunt injector

```

Grunt will inject all bower dependencies from the `bower.json` file into `index.html`.

> After include some bower denpendecy on `bower.json` file, optionally run `grunt bower` and `grunt injector`.





