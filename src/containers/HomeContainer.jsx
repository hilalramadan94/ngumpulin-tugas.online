import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

class HomeContainer extends Component {
  render() {
    return (
      <Container>
        <Jumbotron fluid>
          <Container fluid>
            <center>
              <h2 className="display-3">NGUMPULIN-TUGAS.ONLINE</h2>
            </center>
            {/* <p className="lead">
              Ini adalah aplikasi pengumpulan tugas online.
            </p> */}
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}

export default HomeContainer;
