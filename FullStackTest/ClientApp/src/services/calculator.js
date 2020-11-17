let number = 0;

const numberPress = (keyContent) => {
  if (displayedNum === 0) {
    number = parseInt(keyContent, 10);
  } else {
    number = parseInt(number + keyContent, 10);
  }
}

const actionPress = (action) => {
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    calculator.dataset.previousKeyType = 'operator';
  }
}

export const getKeyPressResult = (key) => {
  const action = key.dataset.action;
  const keyContent = key.textContent;

  if(action) {
    actionPress(action, key);
  } else {
    numberPress(keyContent);
  }

  return number;
};
