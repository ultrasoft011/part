import React, { useState } from "react";

// Display component
const Display = (props) => {
  return <div>{props.counter}</div>;
};

// Button component
const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

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
  };

  return (
    <div>
      {/* Display component*/}
      <Display counter={counter} />
      {/* Set the value of the button onClick attribute to be a reference to the handleClick function*/}
      {/* <button onClick={handleClick}>Click me!</button> */}
      {/* Using the Button component with two props one for handle the click and the other one to set up the name of the button*/}
      <Button onClick={handleClick} text={"Increase by one"}></Button>
      {/* I need to set the () => arrow function if I want to pass directly the argument to the onClick event */}
      {/* <button onClick={() => setCounter(counter + 2)}>Increase twice</button>
      <button onClick={setZero}>Set to Zero</button> */}
      <Button onClick={setZero} text={"Reset"}></Button>
    </div>
  );
};

export default App;
