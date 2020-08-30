# js-exception

A package with a set of standard Exceptions for JavaScript.

## Requirements

JS >=ES6

## Installation

To install this package via npm you must add it to your `package.json` file in the root of your project. 

```json
/* package.json */
{
	"name": "@myname/myproject",
	"type": "module",
	"dependencies": {
		"@zamasaur/js-exception": "https://github.com/zamasaur/js-exception.git"
	}
}
```

You can now install the dependencies by running nmp's install command.
```
$ npm install
```

## Usage

Let the folder structure of your project look like the one described below.

```
root/
	bin/
	config/
	docs/
	public/
	resources/
	src/
		index.js
	tests/
	node_modules/
```

Let say that you have a function like the one described below.

```js
/* index.js */
import {Exception} from "../node_modules/@zamasaur/js-exception/src/Exception.js";

function doStuff() {
	if (Math.random() >= 0.5) {
		return "done.";
	} else {
		throw new Exception("Doh!");
	}
}

try {
	console.log(doStuff());
} catch (exception) {
	console.log(exception.getName());
	console.log(exception.getMessage());
}
```

## UnitTest

This package comes with a series of UnitTest, to run them you must use the following command in a terminal.

```
$ "start """" http://path/to/tests/SpecRunner.html" | cmd
```

## JSDoc

This package comply with the JSDoc standard, to generate them you must use the following command in a terminal opened in the root folder.

```
$ ./node_modules/.bin/jsdoc -r ./src/ -d ./docs/api
```
