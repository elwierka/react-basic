import {compose, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import combinedReducers from './reducers';
import appReducer from './reducers';
let appliedMiddleware;

if(true || process.env.NODE_ENV === 'development') {
    appliedMiddleware = composeWithDevTools(
        applyMiddleware(),
    );
}

let store = createStore(
    appReducer, 
    compose(
        appliedMiddleware,
    ), /* , optionaly - initial state */
);

export default store;