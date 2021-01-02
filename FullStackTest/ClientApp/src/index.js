import "./style.css";
import { getKeyPressResult } from './services/calculator';

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;

    display.textContent = getKeyPressResult(key);
  }
});
