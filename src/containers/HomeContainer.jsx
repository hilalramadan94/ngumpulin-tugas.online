import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { Row, Col } from "rsuite";
import "../App.css";

const titleLabel = (width) => {
  console.log(width);
  var label = "NGUMPULIN-TUGAS.ONLINE";
  if (width < 600) {
    return <h4>{label}</h4>;
  } else {
    return <h2 className="display-3">{label}</h2>;
  }
};

class HomeContainer extends Component {
  // state = { width: 0, height: 0 };

  // componentDidMount() {
  //   window.addEventListener("resize", this.updateDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }

  // updateDimensions = () => {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // };

  render() {
    return (
      <Container className="container-fluid">
        <img className="home__image" src="https://wallpaperaccess.com/download/children-1265270" alt="" />
      </Container>
    );
  }
}

export default HomeContainer;
