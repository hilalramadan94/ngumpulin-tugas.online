import React, { Component } from "react";
import StudentTableComponent from "../components/StudentTableComponent";
import { Container } from "rsuite";
//import TableComponent from "../components/tableComponent";
import { connect } from "react-redux";
import { getStudentsList } from "../actions/studentAction";

class StudentListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getStudentsList());
  }

  handleRefresh(){
    this.props.dispatch(getStudentsList());
    console.log('test');
  }

  render() {
    return (
      <div>
        <br />
        <Container>
          <center>
            <h1 style={{margin:50}}>Daftar Siswa</h1>
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
