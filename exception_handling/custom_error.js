// There are two ways to create custom errors in JavaScript

// 1. Using the Error constructor:

function CustomError(message) {
    this.name = 'CustomError';
    this.message = message || 'Default error message';
    this.stack = (new Error()).stack;
}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

// Example usage:
try {
    throw new CustomError('This is a custom error message');
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Custom Error Caught:', error.message);
    } else {
        // Handle other error types
        console.error('Other Error Caught:', error.message);
    }
}

// 2. Using ES6 class to extend Error:
class CustomError2 extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

// Example usage:
try {
    throw new CustomError2('This is a custom error message');
} catch (error) {
    if (error instanceof CustomError2) {
        console.error('Custom Error Caught:', error.message);
    } else {
        // Handle other error types
        console.error('Other Error Caught:', error.message);
    }
}

