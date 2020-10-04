import axios from "axios";

export const GET_SUBJECTS_LIST = "GET_SUBJECTS_LIST";

//Action Class List
export const getSubjectsList = () => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/subjects.json")
      .then(function (response) {
        dispatch({
          type: GET_SUBJECTS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_SUBJECTS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};