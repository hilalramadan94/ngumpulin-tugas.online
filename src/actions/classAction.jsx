import axios from "axios";

export const GET_CLASSES_LIST = "GET_CLASSES_LIST";

//Action Class List
export const getClassesList = () => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/class.json")
      .then(function (response) {
        dispatch({
          type: GET_CLASSES_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_CLASSES_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};