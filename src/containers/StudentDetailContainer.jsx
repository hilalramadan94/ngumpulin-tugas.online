import React, { Component } from "react";
import { connect } from "react-redux";
import StudentDetailComponent from "../components/StudentDetailComponent";
import { Container } from "reactstrap";
import { getStudentDetail } from "../actions/studentAction";

class StudentDetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getStudentDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <br />
        <Container>
          <center>
            <h1>Detail Siswa</h1>
          </center>
        </Container>
        <br />
        <StudentDetailComponent id={this.props.match.params.id} />
      </Container>
    );
  }
}

export default connect()(StudentDetailContainer);
