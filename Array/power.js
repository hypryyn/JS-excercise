function power(num, pow) {
    let res = 1; //default return 1 for pow=0
    for (let i = 0; i < pow; i++) {
        res = res * num;
    }
    return res;
}
console.log(power(4, 3));

function numPower(num, pow) {
    var res = 1; //return 1 for pow=0
    for (var i = 0; i < pow; i++) {
        res = res * num;
    }
    return res;
}
console.log(numPower(4, 3)); //64
console.log(numPower(16, 2)); //256