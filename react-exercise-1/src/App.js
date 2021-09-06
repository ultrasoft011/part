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
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      {/* The props name will be first and then the name of the variables that I want to show*/}
      <Content parts={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content parts={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content parts={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total exercises={`This course has ${course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} exercises`} />
    </div>
  );
};

export default App;
