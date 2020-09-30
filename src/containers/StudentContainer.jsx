import React, { Component } from "react";
import StudentTableComponent from "../components/StudentTableComponent";
//import TableComponent from "../components/tableComponent";
import { connect } from "react-redux";
import { getStudentList } from "../actions/studentAction";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getStudentList());
  }

  render() {
    return (
      <div>
        <h1>Daftar Siswa</h1>
        <br />
        <StudentTableComponent></StudentTableComponent>
      </div>
    );
  }
}

export default connect()(StudentContainer);
//connect untuk menghubungkan ke reducers
