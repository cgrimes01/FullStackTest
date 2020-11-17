let displayedNum = '0';

const numberPress = (keyContent) => {
  if (displayedNum === '0') {
    displayedNum = keyContent;
  } else {
    displayedNum = displayedNum + keyContent;
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

  return displayedNum;
};
