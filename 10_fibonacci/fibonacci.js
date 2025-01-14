const fibonacci = function(num) {
    let nthTerm = parseInt(num);
    // if(nthTerm < 0){
    //     return "OOPS"}
    // else if (nthTerm === 0){
    //     return 0;
    // }
    // else if(nthTerm <= 2){
    //     return 1;
    // }
    // else{
    //     let sequence = [];
    //     for (let i = 1; i<=nthTerm; i++){1
    //         if (sequence.length<2){
    //             sequence.push(1)
    //         }
    //         else{
    //             sequence.push(sequence.at(-1) + sequence.at(-2))
    //         }
    //     }
    //     return sequence.at(-1);
    // }  

    // Me trying to rewrite the solution from memory the solution.js 
    if(nthTerm < 0){return "OOPS"}
    else if(nthTerm === 0){return 0;}
    let firstPrev = 1;
    let secondPrev = 0;

    for (let i=2; i<=nthTerm; i++){
        let currentValue = firstPrev + secondPrev;
        secondPrev = firstPrev; //firstPrev value will be assigned to secondPrev
        firstPrev = currentValue; //the value of the currentValue will be assigned to the new firstPrev
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
