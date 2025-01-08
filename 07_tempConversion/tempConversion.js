const convertToCelsius = function(temp) {
  let Cel = (temp - 32)*(5/9);
  return Math.round(Cel*10)/10;
};

const convertToFahrenheit = function(temp) {
  let Far = temp*(9/5)+32;
  return Math.round(Far*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
