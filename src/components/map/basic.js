import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer, ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

// DeckGL react component
export default function Base() {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  const layer2 = new ScatterplotLayer({
    id: 'bart-stations',
    data: [
      {name: 'Colma', passengers: 4214, coordinates: [-122.466233, 37.684638]},
      {name: 'Civic Center', passengers: 24798, coordinates: [-122.413756,37.779528]},
    ],
    stroked: false,
    filled: true,
    getPosition: d => d.coordinates,
    getRadius: d => Math.sqrt(d.passengers),
    getFillColor: [255, 200, 255  ]
  });

  return <DeckGL
    initialViewState={INITIAL_VIEW_STATE}
    controller={true}
    layers={layer2}
  >
    <StaticMap mapStyle={MAP_STYLE}/>
  </DeckGL>;
}
