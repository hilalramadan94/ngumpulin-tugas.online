import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { Row, Col } from "rsuite";
import { isMobile } from "react-device-detect";

class HomeContainer extends Component {
  render() {
    const titleLabel = () => {
      var label = "NGUMPULIN-TUGAS.ONLINE";
      if (isMobile) {
        return <h6>{label}</h6>;
      } else {
      return <h2 className="display-3">{label}</h2>;
      }
    };

    return (
      <Container className="container-fluid">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Jumbotron fluid>
              <Container fluid>
                <center>{titleLabel()}</center>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeContainer;
