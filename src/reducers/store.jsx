import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./index";

//Sync ke API disimpan di store
const stored = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));

export default stored;