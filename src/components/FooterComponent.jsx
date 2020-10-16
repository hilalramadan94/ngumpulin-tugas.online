import React, { Component } from "react";
import { Row, Col } from "rsuite";
import "./Components.css";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
        <footer className="footer">
          <div className="container text-center">
            <span className="text-muted">
              Created By : &nbsp;
              <a href="https://github.com/hilalramadan94">Hilal</a> & &nbsp;
              <a href="http://instagram.com/pnurjanah2">Putri</a> 
              <br />@ 2020
            </span>
          </div>
        </footer>
        </Col>
      </Row>
      </div>
    );
  }
}
