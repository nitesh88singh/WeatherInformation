import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import weatherInfoReducer from './app/Store/Reducer/weatherInfoReducer';
import Root from './app/Root';


const appReducer = combineReducers({
  weatherInfo: weatherInfoReducer
});

const store = createStore(appReducer, applyMiddleware(ReduxThunk, logger));

const App = () => {
  return <Provider store={store}>
    <Root />
  </Provider>;
};

export default App;
