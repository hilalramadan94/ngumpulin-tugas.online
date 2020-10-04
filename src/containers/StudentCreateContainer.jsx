import React, { Component } from "react";
import { Container } from "reactstrap";
import StudentFormComponent from "../components/StudentFormComponent";
import { connect } from "react-redux";
import { postStudentCreate } from "../actions/studentAction";
import { getClassesList } from "../actions/classAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataStudent: state.students.getResponseDataStudent,
    errorResponseDataStudent: state.students.errorResponseDataStudent,
  };
};

class CreateStudentContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getClassesList());
  }

  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(postStudentCreate(data));
  }

  render() {
    if (
      this.props.errorResponseDataStudent ||
      this.props.getResponseDataStudent
    )
      if (this.props.getResponseDataStudent) {
        swal(
          "Student Created!",
          "ID : " +
            this.props.getResponseDataStudent.name,
          "success"
        ).then(function () {
            window.location = "/students";
        });
      } else {
        swal("Failed!", this.props.errorResponseDataStudent, "error");
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
