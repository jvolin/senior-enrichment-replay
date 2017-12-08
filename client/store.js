import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunkMiddleware, loggerMiddleware];

export default createStore(mainReducer, composeWithDevTools(applyMiddleware(...middleware)))
