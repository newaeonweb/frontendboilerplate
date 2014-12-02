Front-end Boilerplate. 
=====================
Because DRY is suck. [![Build Status](https://travis-ci.org/newaeonweb/frontendboilerplate.svg?branch=master)](https://travis-ci.org/newaeonweb/frontendboilerplate) 

![Alt text](https://github.com/newaeonweb/frontendboilerplate/blob/gh-pages/images/Frontend-Boilerplate-2014-12-01-12-06-17.jpg "Frontend Boilerplate")



# Preface

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

## Application Directory Layout
We propose a folder structure for web projects from the scratch, because all web projects have CSS, JS, Images folders.

```
	assets/					--> all of the files to be used in production
		bower_components	--> 3rd party js libraries
		css					--> css files
		fonts				--> Font-face folder
		images				--> image files
		index.html			--> base layout file
		js					--> javascript files
	src/					--> scripts for development
		libs/				--> hand made JavaScript files, plugins and others
		preprocessor/		--> your choice for Sass, Less or Stylus
		vendor/				--> third party libraries like: jQuery, Modernizer
	test					--> test source files and libraries
		mocha				--> mocha folder structure for visual test results
			css/			
				mocha.css
			js/				--> testing frameworks file
				chai.js
				mocha.js
		spec				--> specs for testing
			app-test.js		--> example on how to write tests
		test.html			--> visul page for tests
	Gruntfile.js			--> where the magic happens
```
## Getting Started

To get you started you can simply clone or download the repository and install the dependencies, very simple!
[Quick start](#grunt-commands-available).

### Prerequisites

You need git to clone the repository.
[http://git-scm.com/](http://git-scm.com/).

Also you must have node.js and its package manager (npm) installed. 
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone frontendboilerplate

Clone the repository using git:

```
git clone https://github.com/newaeonweb/frontendboilerplate.git
cd frontendboilerplate
```

If you just want to start from zero commit history, you need to do:

```bash
git clone --depth=1 https://github.com/newaeonweb/frontendboilerplate.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies


```
npm install

```

> The npm command will install all the dependencies listed on package.json file.


### Grunt commands available

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





