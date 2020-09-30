import React, { Component } from "react";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/styles/rsuite-default.css";
//Component
import NavBarComponent from "./components/NavBarComponent";
import SideBarComponent from "./components/SideNavComponent";
import FooterComponent from "./components/FooterComponent";
//Container
import HomeContainer from "./containers/HomeContainer";
import StudentContainer from "./containers/StudentContainer";
import PembelajaranContainer from "./containers/PembelajaranContainer";
import TugasContainer from "./containers/TugasContainer";
//Routing
import {
  BrowserRouter,
  //BrowserRouter as Router,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Sidebar style={{ display: "flex", flexDirection: "column" }}>
          <SideBarComponent></SideBarComponent>
        </Sidebar>
        <Container>
          <Header>
            <NavBarComponent></NavBarComponent>
          </Header>
          <Content>
            <Container>
            <BrowserRouter>
              <Route path="/" exact component={HomeContainer} />
              <Route path="/siswa" exact component={StudentContainer} />
              <Route path="/pembelajaran" exact component={PembelajaranContainer} />
              <Route path="/tugas" exact component={TugasContainer} />
            </BrowserRouter>
            </Container>
          </Content>
          <Footer>
            <FooterComponent></FooterComponent>
          </Footer>
        </Container>
      </Container>
    );
  }
}
