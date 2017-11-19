import 'core-js/es6/map';
import 'core-js/es6/set';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';

import App from '/containers/App/index';
import Map from './components/Map';  //if you have default file with module as index.js then you don't need to write here filename
import registerServiceWorker from './registerServiceWorker';

let map = document.getElementById('root');

const sourceUrl = map.getAttribute('sourceUrl');
const paramId = map.getAttribute('paramId');
const baseLink = map.getAttribute('baseLink');
const defaultData = map.getAttribute('defaultData');
const updateTime = map.getAttribute('updateTime');
const shouldUpdate = map.getAttribute('shouldUpdate');
const mapsCoordinates = map.getAttribute('mapsCoordinates');

ReactDOM.render(
    <Map
        sourceUrl={sourceUrl}
        paramId={paramId}
        baseLink={baseLink}
        defaultData={defaultData}
        updateTime={updateTime}
        shouldUpdate={shouldUpdate}
        mapsCoordinates={mapsCoordinates}
    />
    , map
);
registerServiceWorker();
