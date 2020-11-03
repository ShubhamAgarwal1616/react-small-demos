import React from 'react';
import './App.css';
import Grid from "./components/grid/grid";
import Home from "./components/context/home"
import ReactPdf from "./components/progressbar/progressbar";
import {SignupForm} from './components/formik/signup'
import {Timeline} from "./components/timeline/timeline";
import Photo from "./components/camera/photo";

function App() {
  return (
    <div className={"App"}>
        <Photo/>
    </div>
  );
}

export default App;
