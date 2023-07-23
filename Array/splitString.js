const string = 'Learning JavaScript Program';

const result = string.replace(/a/g, "A");

console.log(result);

// program to replace all instances of character in a string

const string2 = 'Learning JavaScript Program';

const splitString = string.split('a');

const result2 = splitString.join('A');

console.log(result2);