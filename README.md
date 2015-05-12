# Custom foundation libsass template
Customized grunt setup using foundation-libsass-template

**Requirements:**

[Node](https://nodejs.org/), [Grunt](http://gruntjs.com/), and [Bower](http://bower.io/)

**Setup:**

1. Clone or fork this project or [download latest version here](https://github.com/tanmancan/foundation-libsass-custom-template/releases/latest) and extract zip

	```shell
	$ git clone git@github.com:tanmancan/foundation-libsass-custom-template.git
	```
	
2. Navigate to the project directory:

	```shell
	$ cd /path/to/project/foundation-libsass-custom-template/
	```

3. Run install scripts:

	```shell
	$ npm install
	```

**Usage:**

Minify javascript and sass files:

```shell
$ grunt
```
	
Check javascript for errors with jshint

```shell
$ grunt checkjs
```

Livereload plugin:
	
```javascript
// Add script to bottom of html page
<script src="//localhost:35729/livereload.js"></script>
```

```shell
# Run livereload
$ grunt livereload
```
