import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return <p>{props.parts} {props.exercises}</p>
}

const Total = (props) => {
  return <p>{props.exercises}</p>
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      {/* The props name will be first and then the name of the variables that I want to show*/}
      <Content parts={part1} exercises={exercises1} />
      <Content parts={part2} exercises={exercises2} />
      <Content parts={part3} exercises={exercises3} />
      <Total exercises={`Number of exercises ${exercises1 + exercises2 + exercises3}`} />
    </div>
  );
};

export default App;