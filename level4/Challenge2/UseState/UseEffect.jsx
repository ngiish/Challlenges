import React, {
    useState,
    useEffect
  } from 'react';
  
  function usingEffect() {
    const [count, setCount] = useState(0);
  
    /* default behaviour is similar to componentDidMount and componentDidUpdate: */
    useEffect(() => {
      // Change document title
      document.title = `Clicked {count} times`;
    });
  
    return (
      <div>
        <p>Clicked count = {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Button
        </button>
      </div>
    );
  }
// In the above example we are updating the document title every time the count gets updated. 
// Here useEffect is working similarly to componentDidMount and componentDidUpdate combined since it will run during the first render and also after every update. 
// This is the default behavior of useEffect