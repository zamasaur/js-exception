/**
* A package with a set of standard Exceptions for JavaScript.
* @module @zamasaur/js-exception
*/

import {Exception} from "./Exception.js";

/**
* Exception that represents error in the program logic.
* @extends Exception
*/
export class LogicException extends Exception {
	
	/**
	* Constructor.
	* 
	* @param {string} message message of the Exception
	*/
	constructor(message) {
		super(message);
	}
}
