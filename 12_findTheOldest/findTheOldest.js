const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldest = people
        // filter the one with undefined year of death and set it to current date
        .filter(person => {
            if(typeof person.yearOfDeath === "undefined"){
                person.yearOfDeath = new Date().getFullYear()}
            return true;
            })
        //sort from oldest to youngest
        // .sort((a,b) => (a.yearOfDeath - a.yearOfBirth)>(b.yearOfDeath - b.yearOfBirth)? -1:1)
        .reduce((older, person) => (person.yearOfDeath - person.yearOfBirth < 
            older.yearOfDeath - older.yearOfBirth? older:older=person),"");
        //return the name only

    // return oldest[0];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
