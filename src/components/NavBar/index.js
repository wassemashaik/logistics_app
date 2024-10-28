import Nav from "react-bootstrap/Nav";
import { FaTruck } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import "./index.css";
import { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const clickRoute = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="nav-container">
      <Nav.Item className="nav-item active" onClick={clickRoute}>
        <Nav.Link href="/home" className="link-item">
          <FaTruck className="icon" />
          <span className="span"> MY MOVES</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link className="link-item">
          <CgProfile className="icon" />
          <span className="span"> MY PROFILE</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link className="link-item">
          <FaFileInvoiceDollar className="icon" />
          <span className="span"> GET QUOTE </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link className="link-item">
          <RiLogoutCircleLine className="icon" />{" "}
          <span className="span"> LOGOUT </span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
