import "./style.scss";
import { getKeyPressResult } from './services/calculator';
import { requestStatistics } from './services/statistics';

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      display.textContent = getKeyPressResult(key);
      console.log('number key!');
    }
    requestStatistics.fibonaci(2);
  }
 });
