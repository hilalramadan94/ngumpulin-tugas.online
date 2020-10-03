import React, { Component } from "react";
import StudentTableComponent from "../components/StudentTableComponent";
import { Container } from "rsuite";
//import TableComponent from "../components/tableComponent";
import { connect } from "react-redux";
import { getStudentsList } from "../actions/studentAction";
import { getClassesList } from "../actions/classAction";

class StudentListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getClassesList());
    this.props.dispatch(getStudentsList());
  }

  render() {
    return (
      <div>
        <br />
        <Container>
          <center>
            <h1>Daftar Siswa</h1>
          </center>
        </Container>
        <br />

        <StudentTableComponent></StudentTableComponent>
      </div>
    );
  }
}

export default connect()(StudentListContainer);
//connect untuk menghubungkan ke reducers
