import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container text-center">
            <span className="text-muted">
              Developed By :{" "}
              <a href="https://github.com/hilalramadan94">Hilal</a> © 2020
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
