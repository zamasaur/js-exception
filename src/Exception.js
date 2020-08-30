/**
* A package with a set of standard Exceptions for JavaScript.
* @module @zamasaur/js-exception
*/

/**
* Exception is the base class for all Exceptions.
*/
export class Exception extends Error {
	
	/**
	* Constructor.
	* 
	* @param {string} message message of the Exception
	*/
	constructor(message) {
		super(message);
		this._name = this.constructor.name;
		this._message = message;
		this.getName.bind(this);
		this.getMessage.bind(this);
		this.toString.bind(this);
	}
	
	/**
	* Returns the name of the Exception.
	* @returns {string}
	*/
	getName() {
		return this._name;
	}
	
	/**
	* Returns the message of the Exception.
	* @returns {string}
	*/
	getMessage() {
		return this._message;
	}
	
	/**
	* Returns a string describing the Exception.
	* @returns {string}
	*/
	toString(){
		return this._name+": "+this._message;
	}
}
