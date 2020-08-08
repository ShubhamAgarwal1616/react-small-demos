import React from 'react';
import './App.css';
import Grid from "./components/grid/grid";
import Home from "./components/context/home"
import Progressbar from "./components/progressbar/progressbar";
import {SignupForm} from './components/formik/signup'
function App() {
  return (
    <div className={"App"}>
        <Progressbar/>
    </div>
  );
}

export default App;
