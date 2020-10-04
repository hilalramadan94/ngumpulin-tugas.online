import { GET_SUBJECTS_LIST } from "../actions/subjectAction";

let initialState = {
  getSubjectsList: false,
  errorSubjectsList: false,
};

const classes = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBJECTS_LIST:
      return {
        ...state,
        getSubjectsList: action.payload.data,
        errorSubjectsList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default classes;
