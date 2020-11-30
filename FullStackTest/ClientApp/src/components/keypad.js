import React from 'react';

function Keypad(props) {
  function onClick(evt) {
    const key = evt.target;
    const action = key.dataset.action;
    const keyValue = key.textContent;
    props.onClick(action, keyValue);
  }

  return (
    <div className="calculator__keys">
      <button onClick={onClick} className="key--operator" data-action="memory-clear">MC</button>
      <button onClick={onClick} className="key--operator" data-action="memory-store">MS</button>
      <button onClick={onClick} className="key--operator" data-action="memory-recall">MR</button>
      <button onClick={onClick} className="key--operator" data-action="blank"></button>
      <button onClick={onClick} className="key--operator" data-action="add">+</button>
      <button onClick={onClick} className="key--operator" data-action="subtract">-</button>
      <button onClick={onClick} className="key--operator" data-action="multiply">&times;</button>
      <button onClick={onClick} className="key--operator" data-action="divide">÷</button>
      <button onClick={onClick}>7</button>
      <button onClick={onClick}>8</button>
      <button onClick={onClick}>9</button>
      <button onClick={onClick} className="key--operator" data-action="fib">Fib</button>
      <button onClick={onClick}>4</button>
      <button onClick={onClick}>5</button>
      <button onClick={onClick}>6</button>
      <button onClick={onClick}>1</button>
      <button onClick={onClick}>2</button>
      <button onClick={onClick}>3</button>
      <button onClick={onClick}>0</button>
      <button onClick={onClick} data-action="decimal">.</button>
      <button onClick={onClick} data-action="clear">AC</button>
      <button onClick={onClick} className="key--equal" data-action="calculate">=</button>
    </div>
  );
}

export default Keypad;