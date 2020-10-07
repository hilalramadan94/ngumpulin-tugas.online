import axios from "axios";

export const GET_THEMES_LIST = "GET_THEMES_LIST";
export const GET_THEME_DETAIL = "GET_THEME_DETAIL";
export const POST_THEME_CREATE = "POST_THEME_CREATE";
export const PUT_THEME_EDIT = "PUT_THEME_EDIT";
export const DELETE_THEME = "DELETE_THEME";

//Action Theme List
export const getThemesList = () => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/themes.json")
      .then(function (response) {
        dispatch({
          type: GET_THEMES_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_THEMES_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Theme Detail
export const getThemeDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/themes/" + id + ".json")
      .then(function (response) {
        dispatch({
          type: GET_THEME_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_THEME_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Theme Create
export const postThemeCreate = (data) => {
  return (dispatch) => {
    axios
      .put(
        "https://test-b93f8.firebaseio.com/themes/" + data.id + "/.json",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_THEME_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_THEME_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Theme Edit
export const putThemeEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put("https://test-b93f8.firebaseio.com/themes/" + id + ".json", data)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_THEME_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_THEME_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Theme Delete
export const deleteTheme = (id) => {
  return (dispatch) => {
    axios
      .delete("https://test-b93f8.firebaseio.com/themes/" + id + ".json")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
