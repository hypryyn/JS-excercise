// v1

// take input from the user
const string1 = prompt('Enter a character: ');

// convert into ASCII value
const result1 = string1.charCodeAt(0);

console.log(`The ASCII value is: ${result1}`);

// v2

// take input from the user
const string2 = prompt('Enter a character: ');

// convert into ASCII value
const result2 = string2.codePointAt(0);

console.log(`The ASCII value is: ${result2}`);