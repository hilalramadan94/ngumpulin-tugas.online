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
import SubjectsListContainer from "./containers/SubjectsListContainer";
import TugasContainer from "./containers/TugasContainer";
import ThemesListContainer from "./containers/ThemesListContainer";
//Students Container
import StudentListContainer from "./containers/StudentListContainer";
import StudentDetailContainer from "./containers/StudentDetailContainer";
import StudentEditContainer from "./containers/StudentEditContainer";
import StudentCreateContainer from "./containers/StudentCreateContainer";
//Routing
import {
  BrowserRouter,
  //BrowserRouter as Router,
  Route,
} from "react-router-dom";

export default class App extends Component {
  //---
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
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
        <BrowserRouter>
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
                <Route path="/" exact component={HomeContainer} />

                <Route
                  path="/students"
                  exact
                  component={StudentListContainer}
                />
                <Route
                  path="/students/create/"
                  exact
                  component={StudentCreateContainer}
                />
                <Route
                  path="/students/detail/:id"
                  exact
                  component={StudentDetailContainer}
                />
                <Route
                  path="/students/edit/:id"
                  exact
                  component={StudentEditContainer}
                />

                <Route
                  path="/subjects"
                  exact
                  component={SubjectsListContainer}
                />
                <Route path="/themes" exact component={ThemesListContainer} />
                <Route path="/tasks" exact component={TugasContainer} />
              </Content>
              <Footer>
                <FooterComponent></FooterComponent>
              </Footer>
            </Container>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}
