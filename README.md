# Custom foundation libsass template
Customized grunt setup using foundation-libsass-template

**Requirements:**

[Node](https://nodejs.org/), [Grunt](http://gruntjs.com/), and [Bower](http://bower.io/)

**Setup:**

1. Clone or fork this project or [download latest version here](https://github.com/tanmancan/foundation-libsass-custom-template/releases/latest) and extract zip

2. Navigation to project directory:

	`$ cd /path/to/project/foundation-libsass-custom-template/`

3. Run install scripts:

	`$ npm install`

**Usage:**

Mifiny javascript and sass files:

	$ grunt

Check javascript for errors with jshint

	$ grunt checkjs

Livereload plugin:
	
	// Add script to bottom of html page
	<script src="//localhost:35729/livereload.js"></script>

	// Run livereload
	$ grunt livereload