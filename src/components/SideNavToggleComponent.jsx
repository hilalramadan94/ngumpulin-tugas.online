import React from "react";
import { Nav, Navbar, Icon } from "rsuite";

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
          <Navbar.Body>  
            <Nav pullRight>
              <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                <Icon icon={expand ? 'eye' : 'eye-slash'} />
              </Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
      );
}
 
export default NavToggle;