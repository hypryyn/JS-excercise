// let randomHand = Math.floor(Math.random() * 3);
// console.log(randomHand);

let sign = () => {
    let handOutput = '';
    let handSign = [];
    for (let i = 0; i < 10; i++) {
        let randomHand = Math.floor(Math.random() * 3);
        if (randomHand = 0) {
            handOutput = "Rock"
        } else if (randomHand = 1) {
            handOutput = "Paper"
        } else {
            handOutput = "Scisor"
        }
        handSign.push(handOutput);
        return console.log(handOutput);
        // return console.log(Math.random());
    };

}

sign();
