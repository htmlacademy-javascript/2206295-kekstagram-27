function getRandomNumber(minVlaue, maxValue) {
  randomNumber = Math.floor(Math.random() * (maxValue - minVlaue + 1)) + minVlaue
  if (randomNumber < 0) {
    randomNumber = NaN;
  }
  return randomNumber;
}

const checkStringLength = function (lenght, maxStringLength) {
  return lenght <= maxStringLength;
}
