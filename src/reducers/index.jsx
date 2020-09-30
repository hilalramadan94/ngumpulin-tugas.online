import { combineReducers } from "redux";
import students from "./students";
import { reducer as formReducer } from "redux-form";

export default combineReducers({ students, form: formReducer });
//NOTE : Digunakan untuk form reducer
