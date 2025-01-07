const sumAll = function(a,b) {
    if(typeof a  !== "number" || typeof b !== "number" || a < 0 || b < 0 || 
        !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    }
    let n = function(a,b){
        if (a>b){return a;}
        else{return b;}
    }
    let sum = n(a,b)*(a+b)/2
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
