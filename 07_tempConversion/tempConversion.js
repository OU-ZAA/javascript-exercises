const convertToCelsius = function(F) {
  let C = Math.round(((F - 32) * 5 / 9) * 10) / 10;
  return C;
};

const convertToFahrenheit = function(C) {
  let F = Math.round((C * 9 / 5 + 32) * 10) /10;
  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
