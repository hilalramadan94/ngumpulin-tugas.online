import { GET_CLASSES_LIST } from "../actions/classAction";

let initialState = {
  getClassesList: false,
  errorClassesList: false,
};

const classes = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSES_LIST:
      return {
        ...state,
        getClassesList: action.payload.data,
        errorClassesList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default classes;
