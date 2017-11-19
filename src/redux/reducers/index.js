import { combineReducers } from 'redux';

import globalReducer from '../../containers/App/reducer';

const appReducer = combineReducers({
    global: globalReducer,
});

export default appReducer;