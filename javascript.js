javascript
function convertToCelsius() {
  var celsiusInput = document.getElementById("celsius").value;
  var fahrenheitOutput = (celsiusInput * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheitOutput.toFixed(2);
}
