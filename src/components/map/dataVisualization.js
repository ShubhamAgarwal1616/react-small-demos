// tutorial - https://medium.com/weekly-webtips/an-introduction-into-deck-gl-f5c8ae84d9a5

import React from "react";
import DeckGL from "deck.gl";
import {StaticMap} from 'react-map-gl';
import axios from "axios";
import {RenderLayers} from "./columnLayer";
import "../../css/dataVisualization.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import {ScatterplotLayer} from '@deck.gl/layers';
import {MapboxLayer} from '@deck.gl/mapbox';



const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoidWd1cjIyMiIsImEiOiJjazZvOXVibW8wMHR3M21xZnE0cjZhbHI0In0.aCGjvePsRwkvQyNBjUEkaw";
const mapboxLightV8 = "mapbox://styles/mapbox/light-v8";
const mapboxLightV9 = "mapbox://styles/mapbox/light-v9";
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
  zoom: 15,
  maxZoom: 16,
  minZoom: 1,
  pitch: 0,
  bearing: 5
};


export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      hover: {
        x: 0,
        y: 0,
        hoveredObject: null
      },
      glContext: null,
    };
    this.deck = React.createRef();
    this.mapRef = React.createRef();
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

  updateArea = () => {
    console.log('coming here', this.mapRef.current);
  }

  onMapLoad = () => {
    const map = this.mapRef.current.getMap();
    const deck = this.deck.current.deck;

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });
    map.addControl(draw, 'top-left');
    map.addLayer(
      // This id has to match the id of the deck.gl layer
      new MapboxLayer({ id: "my-scatterplot", deck }),
      // Optionally define id from Mapbox layer stack under which to add deck layer
      'beforeId'
    );
    map.on('draw.create', this.updateArea);
    map.on('draw.delete', this.updateArea);
    map.on('draw.update', this.updateArea);
    console.log('coming here', this.mapRef.current);
  }

  render() {
    const {hover, data} = this.state;
    console.log(data);
    return (
      <div>
        }
        <DeckGL
          onWebGLInitialized={(e) => this.setState({glContext: e})}
          ref={this.deck}
          layers={RenderLayers({data: data, onHover: hover => this.renderTooltip(hover)})}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
        >
          {this.state.glContext && <StaticMap
            onLoad={this.onMapLoad}
            ref={this.mapRef}
            mapStyle={mapboxSatelliteV9}
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          />}
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
