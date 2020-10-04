import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from "rsuite";
import { getSubjectsList } from '../actions/subjectAction';
import SubjectTableComponent from '../components/SubjectTableComponent';

class SubjectsListContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getSubjectsList());
      }

    render() {
        return (
            <div>
              <br />
              <Container>
                <center>
                  <h1>Daftar Pelajaran</h1>
                </center>
              </Container>
              <br />
      
              <SubjectTableComponent></SubjectTableComponent>
            </div>
          );
    }
}

export default connect()(SubjectsListContainer)