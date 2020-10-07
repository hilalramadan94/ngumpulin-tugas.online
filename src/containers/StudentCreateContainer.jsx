import React, { Component } from "react";
import { Container } from "reactstrap";
import StudentFormComponent from "../components/StudentFormComponent";
import { connect } from "react-redux";
import { getStudentsList, postStudentCreate } from "../actions/studentAction";
import { getClassesList } from "../actions/classAction";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getResponseDataStudent: state.students.getResponseDataStudent,
    errorResponseDataStudent: state.students.errorResponseDataStudent,
  };
};

class CreateStudentContainer extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.props.dispatch(getClassesList());
  }

  handleSubmit(data) {
    this.props.dispatch(postStudentCreate(data));
    this.props.dispatch(getStudentsList());
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      if (
        this.props.errorResponseDataStudent ||
        this.props.getResponseDataStudent
      )
        if (this.props.getResponseDataStudent) {
          swal(
            "Student Created!",
            "ID : " + this.props.getResponseDataStudent.name,
            "success"
          );
        } else {
          swal("Failed!", this.props.errorResponseDataStudent, "error");
        }

      return <Redirect to="/students" />;
    }

    return (
      <Container>
        <h1>Create Student</h1>
        <br />
        <StudentFormComponent
          onSubmit={(data) => this.handleSubmit(data)}
        ></StudentFormComponent>
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateStudentContainer);
