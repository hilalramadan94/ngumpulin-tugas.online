import React, { Component } from "react";
import StudentTableComponent from "../components/StudentTableComponent";
import { Container } from "rsuite";
//import TableComponent from "../components/tableComponent";
import { connect } from "react-redux";
import { getStudentsList } from "../actions/studentAction";

class StudentListContainer extends Component {
  state = { width: 0, height: 0 };
  componentDidMount() {
    this.props.dispatch(getStudentsList());
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

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
