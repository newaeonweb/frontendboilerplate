Front-end Boilerplate. 
=====================
Because DRY is suck.

[![Build Status](https://travis-ci.org/newaeonweb/frontendboilerplate.svg?branch=master)](https://travis-ci.org/newaeonweb/frontendboilerplate) 
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
		css					--> css files
		fonts				--> Font-face folder
		images				--> image files
		index.html			--> base layout file
		js					--> javascript files
	src/					--> scripts for development
		bower_components	--> 3rd party js libraries
		libs				--> hand made JavaScript files, plugins and others
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
			app-test.js	--> example on how to write tests
		test.html			--> visul page for tests
	Gruntfile.js			--> where the magic happens
```
## Getting Started

To get you started you can simply clone or download the repository and install the dependencies, very simple!

### Prerequisites

You need git to clone the repository.
[http://git-scm.com/](http://git-scm.com/).

Also you must have node.js and its package manager (npm) installed. 
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone frontendboilerplate

Clone the repository using [git][git]:

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