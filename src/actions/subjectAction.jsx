import axios from "axios";

export const GET_SUBJECTS_LIST = "GET_SUBJECTS_LIST";
export const GET_SUBJECTS_VIDEO = "GET_SUBJECTS_VIDEO";

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

//Action Subject Video
export const getSubjectsVideo = (name) => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/videos/" + name + ".json")
      .then(function (response) {
        dispatch({
          type: GET_SUBJECTS_VIDEO,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_SUBJECTS_VIDEO,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};