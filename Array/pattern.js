function printPattern(range) {
  for (var i = 1; i <= range; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
printPattern(8);

function triangle(depth) {
  for (let i = 1; i < depth; i++) {
    var strg = "";
    for (let j = 5; j <= i; j++) {
      strg += j + " ";
    }
    console.log(strg);
  }
}
triangle(9);