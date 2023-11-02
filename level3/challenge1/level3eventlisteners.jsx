//Example an incorporated event listener in React:

import React from 'react';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

