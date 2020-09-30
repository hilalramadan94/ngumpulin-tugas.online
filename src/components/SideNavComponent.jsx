import React from "react";
import { Sidenav, Dropdown, Nav, Icon } from "rsuite";

//Style
const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };

  class SideBarComponent extends React.Component {
  render() {
    return (
      <div style={{ width: 250 }}>
        <Sidenav>
        <Sidenav.Header>
              <div style={headerStyles}>
                <span style={{ marginLeft: 5 }}>NGUMPULIN-TUGAS.ONLINE</span>
              </div>
            </Sidenav.Header>
          <Sidenav.Body>
            <Nav>
              <Nav.Item href="/" eventKey="1" icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
              <Nav.Item href="/siswa" eventKey="2" icon={<Icon icon="group" />}>
                Daftar Siswa
              </Nav.Item>
              <Nav.Item href="/pembelajaran" eventKey="3" icon={<Icon icon="book" />}>
                Pembelajaran
              </Nav.Item>
              <Nav.Item href="/tugas" eventKey="4" icon={<Icon icon="task" />}>
                Tugas
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
