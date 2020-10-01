import React from "react";
import { Navbar, Avatar, Nav } from "rsuite";

const NabBarComponent = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header></Navbar.Header>
        <Navbar.Body>
          <Nav pullRight className="margin-10">
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
