import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container text-center">
            <span className="text-muted">
              Created By : &nbsp;
              <a href="https://github.com/hilalramadan94">Hilal</a> & &nbsp;
              <a href="https://github.com/hilalramadan94">Putri</a> 
              <br />@ 2020
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
