import React from "react";
import { Navbar, Nav, Icon } from "rsuite";

const NabBarComponent = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header></Navbar.Header>
        <Navbar.Body>
          {/* <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
          </Nav> */}
        </Navbar.Body>
      </Navbar>
    </div>
  );
};

export default NabBarComponent;
