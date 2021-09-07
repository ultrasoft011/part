import "./App.css";

// Hello component
const Hello = (props) => {
  // Guess the year of birth of the person - helper function "bornYear"
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
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
