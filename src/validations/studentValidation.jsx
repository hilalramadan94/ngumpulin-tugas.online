const studentValidation = (values) => {
    const errors = {};
  
    if (!values.name || values.name === "") {
      errors.name = "Please input name";
    }

    // if (!values.class.name || values.class.name === "") {
    //   errors.class.name = "Please input class name";
    // }

    // if (!values.class.year || values.class.year === "") {
    //   errors.class.year = "Please input class name";
    // }
  
    return errors;
  };
  
  export default studentValidation;
  