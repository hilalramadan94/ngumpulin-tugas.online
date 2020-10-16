import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getSubjectsVideo } from "../actions/subjectAction";
import SubjectDetailComponent from "../components/SubjectDetailComponent";

class SubjectDetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getSubjectsVideo(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <br />
        <Container>
          <center>
            <h1>Detail Pembelajaran</h1>
          </center>
        </Container>
        <br />
        <Container>
          <SubjectDetailComponent id={this.props.match.params.id} />
        </Container>
      </Container>
    );
  }
}

export default connect()(SubjectDetailContainer);
