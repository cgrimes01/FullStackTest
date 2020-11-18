let number = 0;

const numberPress = (keyContent) => {
  if (displayedNum === 0) {
    number = parseInt(keyContent, 10);
  } else {
    number = parseInt(number + keyContent, 10);
  }
};

export const getKeyPressResult = (key) => {
  const action = key.dataset.action;
  const keyContent = key.textContent;

  if(action) {
    // Add logic for actions
  } else {
    numberPress(keyContent);
  }

  return number;
};
