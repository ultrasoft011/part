import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello Ultra!</p>
      <p>
        Hello Ultra{props.name} and my age is {props.year}
      </p>
    </div>
  );
};

const Game = () => {
  return <>
      <h2>My favorite Game is:</h2>
      <p>Pokemon</p>
  </>
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Soft" year="36" />
      <Hello name={a} year={b} />
      <Game />
    </div>
  );
};

export default App;

// import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import Typography from "@material-ui/core/Typography";
// // import Slider from "@material-ui/core/Slider";

// const Hello = (props) => {
//    return (
//       <div>
//          <p>Hello Ultra</p>
//       </div>
//    )
// }

// const App = () => {
//    const now = new Date()
//    const a = 10
//    const b = 20

//    return (
//      <div>
//         <Hello />
//         <Hello />
//        <p>Hello world, it is {now.toString()}</p>
//        <p>
//          {a} plus {b} is {a + b}
//        </p>
//      </div>
//    )
//  }

//  export default App;

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     width: 300,
// //   },
// //   margin: {
// //     height: theme.spacing(3),
// //   },
// // }));

// // const marks = [
// //   {
// //     value: 0,
// //     label: "0",
// //   },
// //   {
// //     value: 10,
// //     label: "10",
// //   },
// //   {
// //     value: 20,
// //     label: "20",
// //   },
// //   {
// //     value: 30,
// //     label: "30",
// //   },
// //   {
// //     value: 40,
// //     label: "40",
// //   },
// //   {
// //     value: 50,
// //     label: "50",
// //   },
// //   {
// //     value: 60,
// //     label: "60",
// //   },
// //   {
// //     value: 70,
// //     label: "70",
// //   },
// //   {
// //     value: 80,
// //     label: "80",
// //   },
// //   {
// //     value: 90,
// //     label: "90",
// //   },
// //   {
// //     value: 100,
// //     label: "100",
// //   },
// // ];

// // const marks2 = [
// //   {
// //     value: 0,
// //     label: "0",
// //   },
// //   {
// //     value: 10,
// //     label: "10",
// //   },
// //   {
// //     value: 20,
// //     label: "20",
// //   },
// //   {
// //     value: 30,
// //     label: "30",
// //   },
// //   {
// //     value: 40,
// //     label: "40",
// //   },
// //   {
// //     value: 50,
// //     label: "50",
// //   },
// //   {
// //     value: 60,
// //     label: "60",
// //   },
// //   {
// //     value: 70,
// //     label: "70",
// //   },
// //   {
// //     value: 80,
// //     label: "80",
// //   },
// //   {
// //     value: 90,
// //     label: "90",
// //   },
// //   {
// //     value: 100,
// //     label: "100",
// //   },
// // ];

// // function valuetext(value) {
// //   return `${value}`;
// // }

// // export default function RangeSlider() {
// //   const classes = useStyles();
// //   const [value, setValue] = React.useState([10, 40]);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <Typography id="range-slider" gutterBottom>
// //         <h1>Preterm Group</h1>
// //         <p>Gestational Age</p>
// //       </Typography>
// //       <Slider
// //         value={value}
// //         onChange={handleChange}
// //         valueLabelDisplay="auto"
// //         aria-labelledby="range-slider"
// //         getAriaValueText={valuetext}
// //         marks={marks}
// //       />

// //       <Typography id="range-slider" gutterBottom>
// //         <h3>Birth Weight - Preterm Group</h3>
// //       </Typography>
// //       <Slider
// //         value={value}
// //         onChange={handleChange}
// //         valueLabelDisplay="auto"
// //         aria-labelledby="range-slider"
// //         getAriaValueText={valuetext}
// //         marks={marks}
// //       />
// //     </div>
// //   );
// //   }
