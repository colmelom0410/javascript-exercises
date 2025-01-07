const repeatString = function(text, number) {
    let combinedText="";
    for(let i=1; i<=number; i++){
        combinedText += text;
    }
    if (number < 0){return "ERROR"}

    return combinedText;
};


// Do not edit below this line
module.exports = repeatString;
