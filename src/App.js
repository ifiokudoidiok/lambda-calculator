import React from "react";
import "./App.css";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
// console.log(Display);
function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <Display />
      
      {/* <section className="display" >
      <span className="result">0</span>
    </section> */}
    {/* <section className="keypad" >
      <button className="executers ">C</button>
      <button className="executers ">+/-</button>
      <button className="executers ">%</button>
      <button className="operators">/</button>
      <button className="numbers">1</button>
      <button className="numbers">2</button>
      <button className="numbers">3</button>
      <button className="operators">X</button>
      <button className="numbers">4</button>
      <button className="numbers">5</button>
      <button className="numbers">6</button>
      <button className="operators">-</button>
      <button className="numbers">7</button>
      <button className="numbers">8</button>
      <button className="numbers">9</button>
      <button className="operators">+</button>
      <button className="numbers" id="zero">0</button>
      <button className="numbers">.</button>
      <button className="operators">=</button>
    </section> */}

      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className="btn-group">
        <Specials/>

      <Numbers />
        </div>
      <Operators/>
      </div>
    </div>
  );
}

export default App;
