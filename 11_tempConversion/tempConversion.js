const convertToCelsius = function(fahrenheit) {
  let conversionCelsius = (fahrenheit - 32) * 5 / 9;
    return Math.ceil(conversionCelsius * 10) / 10;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
