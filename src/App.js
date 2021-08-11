
import './App.css';
import React from 'react'
import UseStateErrorEx from './tutorial/useStateErrorEx';
import UseStateBasic from './tutorial/UseStateBasic';
import UseStateArray from './tutorial/UseStateArray';
import UseStateObject from './tutorial/UseStateObject';
import UseStateCounter from './tutorial/UseStateCounter';
import  UseEffectBasic from './tutorial/UseEffectBasic';
import Forms from './tutorial/Forms';

function App() {
  return (
    <div className="container">
      <h2>Advance React js</h2>
     
     {/*<UseStateCounter></UseStateCounter>*/}
    {/* <UseEffectBasic></UseEffectBasic>*/}
    <Forms></Forms>
    </div>
  );
}

export default App;
