// string is an iterable and you can iterate over each character using a for loop 

var greet = "Hello"
var name = "Lisa"

for(var i=0; i<greet.length; i++){
    console.log(greet[i])
}

// String methods
console.log(greet.length) // returns the length of the string 
console.log(greet.concat(name)) // concatenates string, alterantively you can use the + operator
console.log(greet.charAt(2)) // returns the char at the specified index 
console.log(greet.indexOf("i")) // returns the location of the first position that matches the character 

//The split method chops up the string into an array of sub-strings:
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho'] (separator must be specified)

console.log(greet.toUpperCase()); // "HELLO, "
console.log(greet.toLowerCase()); // "hello, "