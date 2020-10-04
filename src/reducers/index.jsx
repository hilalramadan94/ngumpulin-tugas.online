import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import students from "./students";
import themes from "./themes";
import classes from "./classes";
import subjects from "./subjects";

export default combineReducers({ students, themes, classes, subjects, form: formReducer });
//NOTE : Digunakan untuk form reducer
