/**
*	Content Sample 
*/
function sayHello() {
	
	'use strict';
	
	window.console.log("Say Hello...!");
}

sayHello();


var Apple = function (opts) {
	
	'use strict';
	
    opts = opts || {};

    this.name = opts.name || 'Fuji';

    this.sound = opts.sound || 'crunch';

    return this;
};
