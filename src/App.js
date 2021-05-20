import React from 'react';
import './App.css';
import Grid from "./components/grid/grid";
import Home from "./components/context/home"
import ReactPdf from "./components/progressbar/progressbar";
import {SignupForm} from './components/formik/signup'
import {Timeline} from "./components/timeline/timeline";
import Photo from "./components/camera/photo";
import Map from "./components/map/map-demo";
import MapBox from "./components/map/mapbox";
import Base from "./components/map/basic";
import DataVisualization from "./components/map/dataVisualization";

function App() {
  return (
    <div className={"App"}>
        <DataVisualization/>
    </div>
  );
}

export default App;
