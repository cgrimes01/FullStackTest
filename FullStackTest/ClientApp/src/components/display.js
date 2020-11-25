import React from 'react';

function Display(props) {
  return (
    <div className="calculator__display" data-testid="calculator-display">
      {props.children}
    </div>
  );
}

export default Display;