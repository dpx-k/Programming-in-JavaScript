var sample = 'abcdefghijklmnopqrstuvwxyz'

console.log(sample.match(/q/))


// The .match() method in JavaScript is used to search a string for matches against a 
// regular expression and returns the matching results.

string.match(regexp);

// If a match is found, it returns an array with the matches.
// If no match is found, it returns null.
// If the regex has the g flag (global search), it returns all matches in an array.
// If there's no g flag, it returns an array with extra details (index, input string, etc.).

let text = "Hello, world! Hello, JavaScript!";

// Match all occurrences of "Hello" (case-sensitive)
console.log(text.match(/Hello/g)); // ['Hello', 'Hello']

// Match the first occurrence of "world"
console.log(text.match(/world/)); // ['world', index: 7, input: 'Hello, world! Hello, JavaScript!', groups: undefined]

// Match digits in a string
console.log("Price: 500 dollars".match(/\d+/)); // ['500']

// No match case
console.log(text.match(/Python/)); // null
