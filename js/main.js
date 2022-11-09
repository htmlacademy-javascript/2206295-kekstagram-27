const getRandomNumber = function (minVlaue, maxValue) {
  let randomNumber = Math.floor(Math.random() * (maxValue - minVlaue + 1)) + minVlaue;
  if (randomNumber < 0) {
    randomNumber = NaN;
  }
  return randomNumber;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const checkStringLength = function (length, maxStringLength) {
  return length <= maxStringLength
};

const NUMBER_GENERATED_OBJECT = 25;

const createRandomPhoto = function (id) {
  return {
    id: id,
    url: `photos${getRandomNumber(1, NUMBER_GENERATED_OBJECT)}.jpg`,
    description: 'Фотография',
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200),
  }
};

let photos = [];

for (let i = 0; i < NUMBER_GENERATED_OBJECT; i++) {
  let currentId = i + 1
  photos.push(createRandomPhoto)
  photos[i].id = currentId + 1
}

console.log(photos)
