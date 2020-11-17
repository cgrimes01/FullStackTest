let displayedNum = '0';

export const getKeyPressResult = (key) => {
  const action = key.dataset.action;
  const keyContent = key.textContent;

  if (displayedNum === '0') {
    displayedNum = keyContent;
  } else {
    displayedNum = displayedNum + keyContent;
  }

  return displayedNum;
};
