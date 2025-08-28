const convertToCelsius = function(fahrenheit) {
  let conversionCelsius = (fahrenheit - 32) * 5 / 9;
    return Math.ceil(conversionCelsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let conversionFahrenheit = (celsius * 9 / 5) + 32
  return Math.ceil(conversionFahrenheit *10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
