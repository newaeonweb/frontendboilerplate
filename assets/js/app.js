/**
*	Content Sample 
*/
function sayHello() {
	
	'use strict';
	
	window.console.log("Say Hello...!");
}

sayHello();

/**
*	Sample content to illustrate the use of Mocha for tests. 
*/

var Apple = function (opts) {
	
	'use strict';
	
    opts = opts || {};

    this.name = opts.name || 'Fuji';

    this.sound = opts.sound || 'crunch';

    return this;
};
