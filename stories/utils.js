export const createRandomObject = (fieldCount, allowNested) => {
  let generatedObj = {};
  for(let i = 0; i < fieldCount; i++) {
    let generatedObjField;
    switch(randomInt(allowNested ? 6 : 5)) {
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

export const randomInt = (rightBound) => Math.floor(Math.random() * rightBound);
export const randomString = (size) => {
  let alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let generatedString = '';
  for(let i = 0; i < size; i++) {
    generatedString += alphaChars[randomInt(alphaChars.length)];
  }
  return generatedString;
};

export const getRandomLogs = () => {
  const data = [];
  for (let i = 0; i < 25; i++) {
    const ratio = Math.random();
    if (0 <= ratio && ratio <= 1 / 3) {
      data.push({
        status: 'fail',
        data: { message: 'Not Found' },
        timestamp: new Date(),
      });
    }
    if (1 / 3 <= ratio && ratio <= 2 / 3) {
      data.push({
        status: 'success',
        data: createRandomObject(Math.ceil(Math.random() * 5), true),
        timestamp: new Date()
      })
    }
    if (2 / 3 <= ratio && ratio <= 1) {
      data.push({
        status: 'info',
        data: ['connected', 'disconnected'][Math.floor(Math.random() * 2)],
        timestamp: new Date()
      })
    }
  }
  return data;
};
