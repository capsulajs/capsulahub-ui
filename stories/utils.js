import { random } from 'lodash';

export const createRandomObject = (fieldCount, allowNested) => {
  const randomInt = (rightBound) => Math.floor(Math.random() * rightBound);
  const randomString = (size) => {
    let alphaChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let generatedString = '';
    for (let i = 0; i < size; i++) {
      generatedString += alphaChars[randomInt(alphaChars.length)];
    }
    return generatedString;
  };

  let generatedObj = {};
  for (let i = 0; i < fieldCount; i++) {
    let generatedObjField;
    switch (randomInt(allowNested ? 6 : 5)) {
      case 0:
        generatedObjField = randomInt(1000);
        break;
      case 1:
        generatedObjField = Math.random();
        break;
      case 2:
        generatedObjField = Math.random() < 0.5 ? true : false;
        break;
      case 3:
        generatedObjField = randomString(randomInt(4) + 4);
        break;
      case 4:
        generatedObjField = null;
        break;
      case 5:
        generatedObjField = createRandomObject(fieldCount, allowNested);
        break;
    }
    generatedObj[randomString(8)] = generatedObjField;
  }

  return generatedObj;
};
