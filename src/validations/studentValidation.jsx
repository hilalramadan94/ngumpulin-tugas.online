const studentValidation = (values) => {
    const errors = {};
  
    if (!values.name || values.name === "") {
      errors.name = "Please input name";
    }
  
    return errors;
  };
  
  export default studentValidation;
  