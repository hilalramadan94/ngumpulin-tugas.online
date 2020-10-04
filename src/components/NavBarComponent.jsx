import React from "react";
import { Navbar, Avatar, Nav } from "rsuite";

const NabBarComponent = () => {
  return (
    <div>
      <Navbar> 
        <Navbar.Header></Navbar.Header>
        <Navbar.Body>
          <Nav pullRight style={{ marginRight:10, marginTop:5 }}>
          <Avatar
                circle
                src="https://avatars3.githubusercontent.com/u/5955384?s=60&v=4"
              />
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
};

export default NabBarComponent;
