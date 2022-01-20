import React from "react";
import { Nav } from "react-bootstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

function Navbar() {
  return (
    <Nav className="justify-content-end" bg="light" expand="lg">
      <SignUpModal />
      <SignInModal />
    </Nav>
  );
}

export default Navbar;
