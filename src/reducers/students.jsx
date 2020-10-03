import {
    GET_STUDENTS_LIST,
    GET_STUDENT_DETAIL,
    POST_STUDENT_CREATE,
    PUT_STUDENT_EDIT,
    DELETE_STUDENT,
  } from "../actions/studentAction";
  
  let initialState = {
    //Student List
    getStudentsList: false,
    errorStudentsList: false,
    //Student Detail
    getStudentDetail: false,
    errorStudentDetail: false,
    //Student Data
    getResponseDataStudent: false,
    errorResponseDataStudent: false,
    //Student Delete
    getResponseDeleteStudent: false,
    errorResponseDeleteStudent: false,
  };
  
  const students = (state = initialState, action) => {
    switch (action.type) {
      case GET_STUDENTS_LIST:
        return {
          ...state,
          getStudentsList: action.payload.data,
          errorStudentsList: action.payload.errorMessage,
        };
  
      case GET_STUDENT_DETAIL:
        return {
          ...state,
          getStudentDetail: action.payload.data,
          errorStudentDetail: action.payload.errorMessage,
        };
  
      case POST_STUDENT_CREATE:
        return {
          ...state,
          getResponseDataStudent: action.payload.data,
          errorResponseDataStudent: action.payload.errorMessage,
        };
  
      case PUT_STUDENT_EDIT:
        return {
          ...state,
          getResponseDataStudent: action.payload.data,
          errorResponseDataStudent: action.payload.errorMessage,
        };
  
      case DELETE_STUDENT:
        return {
          ...state,
          getResponseDeleteStudent: action.payload.data,
          errorResponseDeleteStudent: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };

  export default students;
  