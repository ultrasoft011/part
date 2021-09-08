import React, { useState } from "react";

const App = () => {
  // Using the useState to handle changes
  const [counter, setCounter] = useState(0);

  // setTimeout for a counter every second
  // setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("Counting " + counter);

  // handleClick function to button event handling
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const setZero = () => {
    setCounter(0);
  }

  return (
    <div>
      {/* Set the value of the button onClick attribute to be a reference to the handleClick function*/}
      <button onClick={handleClick}>Click me!</button>
      <p>{counter}</p>
      {/* I need to set the () => arrow function if I want to pass directly the argument to the onClick event */}
      <button onClick={() => setCounter(counter + 2)}>Increase twice</button>
      <button onClick={setZero}>Set to Zero</button>
    </div>
  );
};

export default App;
