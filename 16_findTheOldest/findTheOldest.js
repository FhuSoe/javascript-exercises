const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear;
    }
    return death - birth;
};

const findTheOldest = function() {

};

// Do not edit below this line
module.exports = findTheOldest;
