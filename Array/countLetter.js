var str = "Suggesting";
var count = new Array(26);
str = str.toLowerCase();
for (var i = 0; i < str.length; i++) {
  if (count[str.charCodeAt(i) - 97]) {
    count[str.charCodeAt(i) - 97]++; // Increment count
  }
  else {
    count[str.charCodeAt(i) - 97] = 1; // Add entry
  }
}
for (var i = 0; i < 26; i++) {
  if (count[i]) {
    console.log(`Character ${i + 'a'} has occured ${count[i]} number of times`);
  }
}

let letter = "Matter";
let nWord = new Array(26);
str = letter.toLowerCase();
for (let i = 0; i < letter.length; i++) {
  if (nWord[letter.charCodeAt(i) - 97]) {
    nWord[letter.charCodeAt(i) - 97]++; // Increment count
  }
  else {
    nWord[letter.charCodeAt(i) - 97] = 1; // Add entry
  }
}
for (let i = 0; i < 26; i++) {
  if (nWord[i]) {
    console.log(`Character ${i + 'a'} has occured ${nWord[i]} number of times`);
  }
}

