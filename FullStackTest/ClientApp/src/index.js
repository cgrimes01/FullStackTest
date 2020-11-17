import "./style.scss";
import { getKeyPressResult } from './services/calculator';

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      console.log('number key!');
    } else {
      console.log(`${action} key!`);
    }

    display.textContent = getKeyPressResult(key);
  }
 });
