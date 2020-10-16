import {
  GET_SUBJECTS_LIST,
  GET_SUBJECTS_VIDEO,
} from "../actions/subjectAction";

let initialState = {
  getSubjectsList: false,
  errorSubjectsList: false,
  getSubjectsVideo: false,
  errorSubjectsVideo: false,
};

const classes = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBJECTS_LIST:
      return {
        ...state,
        getSubjectsList: action.payload.data,
        errorSubjectsList: action.payload.errorMessage,
      };

    case GET_SUBJECTS_VIDEO:
      return {
        ...state,
        getSubjectsVideo: action.payload.data,
        errorSubjectsVideo: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default classes;
