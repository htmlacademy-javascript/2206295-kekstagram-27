const getRandomNumber = function (minVlaue, maxValue) {
  let randomNumber = Math.floor(Math.random() * (maxValue - minVlaue + 1)) + minVlaue
  if (randomNumber < 0) {
    randomNumber = NaN;
  }
  return randomNumber;
}

const checkStringLength = function (lenght, maxStringLength) {
  return lenght <= maxStringLength;
}

const createRandomUser = function () {
  const names = ['Даниил', 'Александр', 'Платон', 'Алиса', 'Софья', 'Агата', 'Максим', 'Полина', 'Анна', 'Марина', 'Ирина', 'Иван', 'Наталья', 'Дарья', 'Илья', 'Варвара', 'Герман', 'Анастасия', 'Елизавета', 'Амира', 'Камиль', 'Артём', 'Артур', 'Стефания', 'Зоя', 'Валерия', 'Михаил', 'Василий', 'Владислав', 'Алексей'];
  const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
  return {
    id: getRandomNumber(1, 1000),
    avatar: 'img/avatar' + getRandomNumber(1, 6) + '.svg',
    message: messages[getRandomNumber(0, messages.length - 1)],
    name: names[getRandomNumber(0, names.length - 1)],
  }
}

