// A RangeError in JavaScript occurs when a function receives a value outside its allowed range. 
// For example, the toString(radix) method converts a number to a string in the specified number system (radix). 
// Valid radix values range from 2 (binary) to 36, and passing an invalid radix (e.g., 100) will trigger a RangeError.

// Converting a number to different bases
console.log((10).toString(2)); // '1010' (Binary)
console.log((10).toString(8)); // '12' (Octal)
console.log((10).toString(16)); // 'a' (Hexadecimal)

// This will throw a RangeError because base 100 is not allowed
try {
    console.log((10).toString(100)); 
} catch (error) {
    console.error(error.name + ": " + error.message); // RangeError: toString() radix argument must be between 2 and 36
}
