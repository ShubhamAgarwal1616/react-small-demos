// tutorial - https://medium.com/weekly-webtips/an-introduction-into-deck-gl-f5c8ae84d9a5

import React from "react";
import DeckGL from "deck.gl";
import {StaticMap} from 'react-map-gl';
import axios from "axios";
import {RenderLayers} from "./columnLayer";
import "../../css/dataVisualization.css";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoidWd1cjIyMiIsImEiOiJjazZvOXVibW8wMHR3M21xZnE0cjZhbHI0In0.aCGjvePsRwkvQyNBjUEkaw";
const mapboxLightV8 = "mapbox://styles/mapbox/light-v8";
const mapboxStreetsV11 = "mapbox://styles/mapbox/streets-v11";
const mapboxOutdoorsV11 = "mapbox://styles/mapbox/outdoors-v11";
const mapboxLightV10 = "mapbox://styles/mapbox/light-v10";
const mapboxDarkV10 = "mapbox://styles/mapbox/dark-v10";
const mapboxSatelliteV9 = "mapbox://styles/mapbox/satellite-v9";
const mapboxSatelliteStreetsV11 = "mapbox://styles/mapbox/satellite-streets-v11";
const mapboxNavigationDayV1 = "mapbox://styles/mapbox/navigation-day-v1";
const mapboxNavigationNightV1 = "mapbox://styles/mapbox/navigation-night-v1";
const INITIAL_VIEW_STATE = {
  longitude: 12.8333,
  latitude: 42.8333,
  zoom: 4,
  maxZoom: 16,
  minZoom: 1,
  pitch: 60,
  bearing: 5
};

let data;
export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      hover: {
        x: 0,
        y: 0,
        hoveredObject: null
      }
    };
  }

  renderTooltip({x, y, object, layer}) {
    this.setState({hover: {x, y, layer, hoveredObject: object}});
  }

  fetchData() {
    axios.all([
      axios.get('https://disease.sh/v2/countries?allowNull=false'),
    ]).then(axios.spread((World) => {
      let data = World.data || [];
      data = data.map(function (location) {
        return {
          active: location.active,
          country: location.country,
          continent: location.continent,
          coordinates: [location.countryInfo.long, location.countryInfo.lat]
        };
      });
      data = data.filter(location => (location.continent === "Europe"));
      this.setState({data: data});
    })).catch((error) => {
      console.log(error);
      return [];
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {hover, data} = this.state;
    console.log(data);
    return (
      <div>
        }
        <DeckGL layers={RenderLayers({data: data, onHover: hover => this.renderTooltip(hover)})}
                initialViewState={INITIAL_VIEW_STATE} controller={true}>
          <StaticMap mapStyle={mapboxSatelliteStreetsV11} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}/>
        </DeckGL>

        <div>
          {hover.hoveredObject && (
            <div style={{
              position: "absolute",
              zIndex: 1000,
              background: "#ffffff",
              pointerEvents: "none",
              borderRadius: "5px",
              left: hover.x,
              top: hover.y
            }} >
              <ul className="hoveredObjectData">
                <li><h4>{hover.hoveredObject.country}</h4></li>
                <li>active cases: <span>{hover.hoveredObject.active.toLocaleString()}</span></li>
              </ul>
            </div>
          )
          }
        </div >
      </div>
    );
  }
}
