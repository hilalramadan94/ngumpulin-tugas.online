import axios from "axios";

export const GET_STUDENTS_LIST = "GET_STUDENTS_LIST";
export const GET_STUDENT_DETAIL = "GET_STUDENT_DETAIL";
export const POST_STUDENT_CREATE = "POST_STUDENT_CREATE";
export const PUT_STUDENT_EDIT = "PUT_STUDENT_EDIT";
export const DELETE_STUDENT = "DELETE_STUDENT";

//Action Student List
export const getStudentList = () => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/students.json")
      .then(function (response) {
        console.log(response);
        dispatch({
          type: GET_STUDENTS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_STUDENTS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Student Detail
export const getStudentDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/students/" + id + ".json")
      .then(function (response) {
        dispatch({
          type: GET_STUDENT_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_STUDENT_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Student Create
export const postStudentCreate = (data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .put(
        "https://test-b93f8.firebaseio.com/students/" + data.id + "/.json",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_STUDENT_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_STUDENT_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Student Edit
export const putStudentEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put("https://test-b93f8.firebaseio.com/students/" + id + ".json", data)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_STUDENT_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_STUDENT_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Student Delete
export const deleteStudent = (id) => {
  return (dispatch) => {
    axios
      .delete("https://test-b93f8.firebaseio.com/students/" + id + ".json")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
