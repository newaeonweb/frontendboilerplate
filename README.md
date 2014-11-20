Front-end Boilerplate. 
=====================
Because DRY is suck.

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

# Getting Start
We propose a folder structure for web projects from the scratch, because all web projects have CSS, JS, Images folders.

## Application Directory Layout

    assets/             	--> all of the files to be used in production
	  fonts			     --> Font-face folder
      css/              	--> css files
        style.css       	--> default stylesheet
      images/           	--> image files
      index.html        	--> base layout file
      js/               	--> javascript files
        app.js          	--> the main application js
		vendor/ 		    --> Third party libraries
      bower_components  	--> 3rd party js libraries
    src/            		--> handy scripts
    	preprocessor/	   --> your choice for Sass, Less or Stylus
		libs/			   --> JavaScript files
	test/               	--> test source files and libraries
      karma.conf.js         --> config file for running unit tests with Karma
      protractor-conf.js    --> config file for running e2e tests with Protractor
      e2e/
        2e2-teste.js        --> end-to-end specs
      unit/             	 
        unit-tests.js       --> unit specs/tests