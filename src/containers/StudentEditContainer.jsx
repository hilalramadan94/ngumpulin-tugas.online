import React, { Component } from "react";
import { connect } from "react-redux";
import StudentFormComponent from "../components/StudentFormComponent";
import { Container } from "reactstrap";
import { getStudentDetail, putStudentEdit } from "../actions/studentAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataStudent: state.students.getResponseDataStudent,
    errorResponseDataStudent: state.students.errorResponseDataStudent,
  };
};

class StudentEditContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getStudentDetail(this.props.match.params.id));
  }

  //method submit
  handleSubmit(data) {
    this.props.dispatch(putStudentEdit(data, this.props.match.params.id));
  }

  render() {
    //Alert
    if (
        this.props.errorResponseDataStudent ||
        this.props.getResponseDataStudent
      )
        if (this.props.getResponseDataStudent) {
          swal(
            "Student Updated!",
            "Name : " +
              this.props.getResponseDataStudent.name
          ).then(function () {
            window.location = "/students";
          });
        } else {
          swal("Failed!", this.props.errorResponseDataStudent, "error");
        }

    //Return
    return (
      <Container>
        <br />
        <Container>
          <center>
            <h1>Detail Siswa</h1>
          </center>
        </Container>
        <br />
        <StudentFormComponent onSubmit={(data) => this.handleSubmit(data)} id={this.props.match.params.id} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(StudentEditContainer);
