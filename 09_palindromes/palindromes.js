const palindromes = function (text) {
    // text = text.replace(/[?!, .]/g,"").toLowerCase();
    // let newText ="";
    // for (let i = text.length - 1; i>=0; i--){
    //     newText += text[i];
    // }
    // if (text === newText){
    //     return true;
    // }
    // return false;

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const oldText = text.toLowerCase().split("").filter(char => (alphanumerical.includes(char))).join("");
    const newText = oldText.split("").reverse().join("");

    return oldText === newText;


};

// Do not edit below this line
module.exports = palindromes;
