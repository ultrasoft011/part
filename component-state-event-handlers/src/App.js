import "./App.css";

// Hello component

// I can apply destructuring directly passed to the component * const Hello = ({name, age}) => { *
const Hello = (props) => {
  // Since props is an object we can streamline our component by assigning the value of the properties directly into variables
  // const name = props.name;
  // const age = props.age;

  // Destructuring the variables: extract and gather the values of an object's properties into separate variables.
  const {name, age} = props;

  // Guess the year of birth of the person - helper function "bornYear"
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear();
  //   return yearNow - age;
  // };

  // bornYear function refactored
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>You probably born on {bornYear()}</p>
    </div>
  );
};

// App.js

const App = () => {
  const name = "Ultra";
  const age = 30;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
