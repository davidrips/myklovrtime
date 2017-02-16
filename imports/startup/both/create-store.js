import { createStore, applyMiddleware, combineReducers} from 'redux'

import * as reducers from './reducers.js'

export default function(data){
	var reducer = combineReducers(reducers)
	var store = createStore(reducer, data)
	return store
}