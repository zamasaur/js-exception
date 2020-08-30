import { Exception } from "../../src/Exception.js";
import { LogicException } from "../../src/LogicException.js";
import { InvalidArgumentException } from "../../src/InvalidArgumentException.js";

describe("testException", function () {

	try {
		throw new Exception("Exception is the base class for all Exceptions.");
	} catch (exception) {
		it('expect(exception.getName()).toBe("Exception")', function () {
			expect(exception.getName()).toBe("Exception");
		});
		it('expect(exception.getMessage()).toBe("Exception is the base class for all Exceptions.")', function () {
			expect(exception.getMessage()).toBe("Exception is the base class for all Exceptions.");
		});
		it('expect(exception.toString()).toBe(exception.getName()+": "+exception.getMessage())', function () {
			expect(exception.toString()).toBe(exception.getName() + ": " + exception.getMessage());
		});
	}
});

describe("testLogicException", function () {

	try {
		throw new LogicException("Exception that represents error in the program logic.");
	} catch (exception) {
		it('expect(exception.getName()).toBe("LogicException")', function () {
			expect(exception.getName()).toBe("LogicException");
		});
		it('expect(exception.getMessage()).toBe("Exception that represents error in the program logic.")', function () {
			expect(exception.getMessage()).toBe("Exception that represents error in the program logic.");
		});
		it('expect(exception.toString()).toBe(exception.getName()+": "+exception.getMessage())', function () {
			expect(exception.toString()).toBe(exception.getName() + ": " + exception.getMessage());
		});
	}
});

describe("testInvalidArgumentException", function () {

	try {
		throw new InvalidArgumentException("Exception thrown if an argument is not of the expected type.");
	} catch (exception) {
		it('expect(exception.getName()).toBe("InvalidArgumentException")', function () {
			expect(exception.getName()).toBe("InvalidArgumentException");
		});
		it('expect(exception.getMessage()).toBe("Exception thrown if an argument is not of the expected type.")', function () {
			expect(exception.getMessage()).toBe("Exception thrown if an argument is not of the expected type.");
		});
		it('expect(exception.toString()).toBe(exception.getName()+": "+exception.getMessage())', function () {
			expect(exception.toString()).toBe(exception.getName() + ": " + exception.getMessage());
		});
	}
});
