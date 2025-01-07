const removeFromArray = function(array, ...removed) {
    // Loop over each element in the removed array
    for (let item of removed){
        // check if the item still exists in the array(in case there's there two or more similar items)
        while(array.indexOf(item) !== -1){
            const index = array.indexOf(item);
            array.splice(index,1);
        }
        if (array.indexOf(item) !== -1){continue}
            
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
