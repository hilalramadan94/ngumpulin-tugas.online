import React from "react";
import { Link } from "react-router-dom";
import { Sidenav, Dropdown, Nav, Icon } from "rsuite";

//Style
const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

class SideBarComponent extends React.Component {
  render() {
    return (
      <div>
        <Sidenav expanded={this.props.expand} appearance="subtle">
          <Sidenav.Header>
            <div style={headerStyles}>
              <span style={{ marginLeft: 5 }}>
                {this.props.expand ? (
                  "NGUMPULIN-TUGAS.ONLINE"
                ) : (
                  <Icon icon="heart"></Icon>
                )}
              </span>
            </div>
          </Sidenav.Header>

          <Sidenav.Body>
            <Nav>
              <Nav.Item href="/" eventKey="1" icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
              <Nav.Item
                //href="/students"
                componentClass={Link} to="/students"
                eventKey="2"
                icon={<Icon icon="group" />}
              >
                Daftar Siswa
              </Nav.Item>
              <Nav.Item 
              //href="/themes"
              componentClass={Link} to="/themes"
               eventKey="3" icon={<Icon icon="book2" />}>
                Tematik
              </Nav.Item>
              <Nav.Item
                href="/subjects"
                eventKey="4"
                icon={<Icon icon="book" />}
              >
                Pembelajaran
              </Nav.Item>
              <Dropdown
                eventKey="5"
                title="Settings"
                icon={<Icon icon="gear-circle" />}
              >
                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                <Dropdown.Menu eventKey="4-5" title="Custom Action">
                  <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}

export default SideBarComponent;
