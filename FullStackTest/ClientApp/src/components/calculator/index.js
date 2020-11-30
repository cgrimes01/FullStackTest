import React, { useState } from 'react';
import Display from '../display';
import Keypad from '../keypad';

function Calculator(props) {
  const [number, setNumber] = useState(0);

  function updateNumber(keyValue) {
    if (number === 0) {
      setNumber(parseInt(keyValue, 10));
    } else {
      setNumber(parseInt(number + keyValue, 10));
    }
  }

  return (
    <div className="calculator">
      <Display>{number}</Display>
      <Keypad
        onClick={(action, keyValue) => {
          if (!action) {
            updateNumber(keyValue);
          }
        }}
      />
    </div>
  );
}

export default Calculator;