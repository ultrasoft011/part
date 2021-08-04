import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];

const marks2 = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "70",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 100,
    label: "100",
  },
];


function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([10, 40]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <h1>Preterm Group</h1>
        <p>Gestational Age</p>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
      
      <Typography id="range-slider" gutterBottom>
        <h3>Birth Weight - Preterm Group</h3>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </div>
  );
}



// const Header = (props) => {
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1 + " " + exercises1}</p>
//     </div>
//   );
// };

// const Content = (props) => {
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   return (
//     <div>
//       <p>{part2} {exercises2}</p>
//     </div>
//   );
// };

// const Total = (props) => {
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <div>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises3}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Content />
//       <Total />
//     </div>
//   );
// };

// export default App;
