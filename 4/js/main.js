let minVlaue
let maxValue
let randomNumber
let getRandomNumber = function (minVlaue, maxValue) {
  randomNumber = Math.floor(Math.random() * (maxValue - minVlaue + 1)) + minVlaue
  if (randomNumber < 0) {
    randomNumber = NaN
    return randomNumber
  }
  return randomNumber
}