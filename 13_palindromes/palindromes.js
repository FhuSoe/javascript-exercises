const palindromes = function (str) {
    const uniformString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = uniformString.split('').reverse().join('');
    return uniformString === reversedString ;
};

// Do not edit below this line
module.exports = palindromes;
