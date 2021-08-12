
import './App.css';
import React from 'react'
import UseStateErrorEx from './tutorial/useStateErrorEx';
import UseStateBasic from './tutorial/UseStateBasic';
import UseStateArray from './tutorial/UseStateArray';
import UseStateObject from './tutorial/UseStateObject';
import UseStateCounter from './tutorial/UseStateCounter';
import  UseEffectBasic from './tutorial/UseEffectBasic';
import LearnJSON from './tutorial/LearnJSON';
import Forms from './tutorial/Forms';
import Index from './tutorial/Reducer/Index';

function App() {
  return (
    <div className="container">
      <h2>Advance React js</h2>
     
     {/*<UseStateCounter></UseStateCounter>*/}
    {/* <UseEffectBasic></UseEffectBasic>*/}
    {/*<LearnJSON></LearnJSON>*/}
    {/*<Forms></Forms>*/}
    <Index></Index>
    </div>
  );
}

export default App;
