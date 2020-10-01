import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Col, FormGroup, Row, Input, Label, Button } from "reactstrap";
import studentValidation from "../validations/studentValidation";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.students.getStudentDetail.name,
      class: state.students.getStudentDetail.class.name,
    },
  };
};
//NOTE : Wajib initialValues, digunakan untuk edit

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readonly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col>
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readonly={readonly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "yellow" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="id"
                component={renderField}
                label="Id :"
                disabled={
                  this.props.initialValues.id === undefined ? false : true
                }
              />
            </FormGroup>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
            <FormGroup>
              <Field
                type="text"
                name="class"
                component={renderField}
                label="Class :"
              />
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                color="dark"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

//Setting Form
FormComponent = reduxForm({
  form: "FormComponent",
  validate: studentValidation,
  enableReinitialize: true, //Form Bisa Digunakan di Create dan Edit
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
