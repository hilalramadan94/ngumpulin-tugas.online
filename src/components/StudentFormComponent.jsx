import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Col, FormGroup, Row, Input, Label, Button } from "reactstrap";
import studentValidation from "../validations/studentValidation";
import { getClassesList } from "../actions/classAction";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.students.getStudentDetail.name,
      class: state.students.getStudentDetail.class,
    },
    getClassesList: state.classes.getClassesList,
    errorClassesList: state.classes.errorClassesList,
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

const renderFieldSelect = ({
  input,
  options,
  label,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col>
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Field {...input} className="form-control" component="select">
        <option></option>
        {options.map((val) => (
          <option value={val.value} key={val.value}>
            {val.value}
          </option>
        ))}
      </Field>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "yellow" }}>{warning}</p>))}
    </Col>
  </Row>
);

class StudentFormComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getClassesList());
  }

  render() {
    const newData = [];
    for (var i = 0; i < this.props.getClassesList.length; i++)
      newData.push({
        label: this.props.getClassesList[i].id,
        value: this.props.getClassesList[i].name,
      });

    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={4}>
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
                name="class.name"
                component={renderFieldSelect}
                label="Class Name :"
                options={newData}
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
StudentFormComponent = reduxForm({
  form: "StudentFormComponent",
  validate: studentValidation,
  enableReinitialize: true,
})(StudentFormComponent);

export default connect(mapStateToProps, null)(StudentFormComponent);
