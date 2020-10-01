import React, { Component } from "react";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/styles/rsuite-default.css";
//Component
import NavBarComponent from "./components/NavBarComponent";
import SideBarComponent from "./components/SideNavComponent";
import NavToggle from "./components/SideNavToggleComponent";
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
import StudentDetailContainer from "./containers/StudentDetailContainer";

export default class App extends Component {
  //---
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand,
    });
  }
  //---
  render() {
    const { expand } = this.state;
    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
          <Sidebar
            style={{ display: "flex", flexDirection: "column" }}
            width={expand ? 260 : 56}
            collapsible
          >
            <SideBarComponent expand={expand}></SideBarComponent>
            <NavToggle expand={expand} onChange={this.handleToggle} />
          </Sidebar>

          <Container>
            <Header>
              <NavBarComponent></NavBarComponent>
            </Header>
            <Content>
              <BrowserRouter>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/students" exact component={StudentContainer} />
                <Route
                  path="/pembelajaran"
                  exact
                  component={PembelajaranContainer}
                />
                <Route path="/tugas" exact component={TugasContainer} />
                <Route path="/students/detail/:id" exact component={StudentDetailContainer} />
              </BrowserRouter>
            </Content>
            <Footer>
            <FooterComponent></FooterComponent>
          </Footer>
          </Container>
        </Container>
      </div>
    );
  }
}
