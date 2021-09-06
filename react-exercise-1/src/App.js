import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <p>
      {props.parts} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return <p>{props.exercises}</p>;
};

const App = () => {
  // Refactoring into objects
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      {/* The props name will be first and then the name of the variables that I want to show*/}
      <Content parts={part1.name} exercises={part1.exercises} />
      <Content parts={part2.name} exercises={part2.exercises} />
      <Content parts={part3.name} exercises={part3.exercises} />
      <Total exercises={`Number of exercises ${part1.exercises + part2.exercises + part3.exercises}`} />
    </div>
  );
};

export default App;
