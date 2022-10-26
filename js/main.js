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

const NAMES = ['Даниил', 'Александр', 'Платон', 'Алиса', 'Софья', 'Агата', 'Максим', 'Полина', 'Анна', 'Марина', 'Ирина', 'Иван', 'Наталья', 'Дарья', 'Илья', 'Варвара', 'Герман', 'Анастасия', 'Елизавета', 'Амира', 'Камиль', 'Артём', 'Артур', 'Стефания', 'Зоя', 'Валерия', 'Михаил', 'Василий', 'Владислав', 'Алексей'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const NUMBER_GENERATED_OBJECT = 25;

let idListPhoto = [];

for (let i = 1; i <= 25; i++) {
  idListPhoto.push(i)
};

let idListComment = Array.from(idListPhoto);

const createRandomComment = function () {
  let e = getRandomNumber(1, 4);
  if (e === 1) {
    return {
      id: idListComment.shift(),
      avatar: `img/avatar${getRandomNumber(1, 6)}.svg`,
      message: `${getRandomArrayElement(MESSAGES)}
      ${getRandomArrayElement(MESSAGES)}`,
      name: getRandomArrayElement(NAMES),
    }
  }
  return {
    id: idListComment.shift(),
    avatar: `img/avatar${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
};

const createRandomPhoto = function () {
  return {
    id: idListPhoto.shift(),
    url: `photos${getRandomNumber(1, NUMBER_GENERATED_OBJECT)}.jpg`,
    description: 'Фотография',
    likes: getRandomNumber(15, 200),
    comments: createRandomComment(),
  }
};

const dateForCheck = Array.from({ length: NUMBER_GENERATED_OBJECT }, createRandomPhoto);
