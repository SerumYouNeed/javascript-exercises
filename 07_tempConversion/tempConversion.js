const convertToCelsius = function(temp) {
  let celc = (temp - 32) * (5 / 9);
  return +celc.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  let fahr = temp * (9 / 5) + 32
  return +fahr.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
