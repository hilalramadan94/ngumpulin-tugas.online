import { combineReducers } from "redux";
import students from "./students";
import themes from "./themes";
import { reducer as formReducer } from "redux-form";

export default combineReducers({ students, themes, form: formReducer });
//NOTE : Digunakan untuk form reducer
