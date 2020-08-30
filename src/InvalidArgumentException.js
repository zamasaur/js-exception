/**
* A package with a set of standard Exceptions for JavaScript.
* @module @zamasaur/js-exception
*/

import {LogicException} from "./LogicException.js";

/**
* Exception thrown if an argument is not of the expected type.
* @extends LogicException
*/
export class InvalidArgumentException extends LogicException {
	
	/**
	* Constructor.
	* 
	* @param {string} message message of the Exception
	*/
	constructor(message) {
		super(message);
	}
}
