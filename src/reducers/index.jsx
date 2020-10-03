import { combineReducers } from "redux";
import students from "./students";
import themes from "./themes";
import classes from "./classes";
import { reducer as formReducer } from "redux-form";

export default combineReducers({ students, themes, classes, form: formReducer });
//NOTE : Digunakan untuk form reducer
