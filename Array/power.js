function power(num, pow) {
    let res = 1; //default return 1 for pow=0
    for (let i = 0; i < pow; i++) {
        res = res * num;
    }
    return res;
}
console.log(power(4, 3));



function numPower(num, pow) {
    let res = 1;
    for (let j = 0; j < pow; j++) {
        res = res * num;
    }
    return res;
}
console.log(numPower(5, 3));