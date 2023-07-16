import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import partyReducer from './Redux/Reducer';

export const Store = createStore(
	partyReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);
