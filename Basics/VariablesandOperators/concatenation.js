console.log("Inter" + "net")

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

console.log(365 + ' days')
console.log(100 + ' years')

console.log(1 + '2') // return 12, not 3

/*Here, JavaScript tries to help by converting the numbers to strings, and then concatenating the number and the string together, ending up with a string value.

The process of this "under-the-hood" conversion of values in JavaScript is referred to as "coercion". */