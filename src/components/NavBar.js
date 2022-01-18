import React from "react";
import { Nav } from "react-bootstrap";
import SignUpModal from "./SignUpModal";

function Navbar() {
  return (
    <Nav className="justify-content-end" bg="light" expand="lg">
      <SignUpModal />
    </Nav>
  );
}

export default Navbar;
