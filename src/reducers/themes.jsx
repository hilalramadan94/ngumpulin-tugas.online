import {
    GET_THEMES_LIST,
    GET_THEME_DETAIL,
    POST_THEME_CREATE,
    PUT_THEME_EDIT,
    DELETE_THEME,
  } from "../actions/themeAction";
  
  let initialState = {
    //Theme List
    getThemesList: false,
    errorThemesList: false,
    //Theme Detail
    getThemeDetail: false,
    errorThemeDetail: false,
    //Theme Data
    getResponseDataTheme: false,
    errorResponseDataTheme: false,
    //Theme Delete
    getResponseDeleteTheme: false,
    errorResponseDeleteTheme: false,
  };
  
  const themes = (state = initialState, action) => {
    switch (action.type) {
      case GET_THEMES_LIST:
        return {
          ...state,
          getThemesList: action.payload.data,
          errorThemesList: action.payload.errorMessage,
        };
  
      case GET_THEME_DETAIL:
        return {
          ...state,
          getThemeDetail: action.payload.data,
          errorThemeDetail: action.payload.errorMessage,
        };
  
      case POST_THEME_CREATE:
        return {
          ...state,
          getResponseDataTheme: action.payload.data,
          errorResponseDataTheme: action.payload.errorMessage,
        };
  
      case PUT_THEME_EDIT:
        return {
          ...state,
          getResponseDataTheme: action.payload.data,
          errorResponseDataTheme: action.payload.errorMessage,
        };
  
      case DELETE_THEME:
        return {
          ...state,
          getResponseDeleteTheme: action.payload.data,
          errorResponseDeleteTheme: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };

  export default themes;
  