import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    dialogsReducer,
    profileReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;