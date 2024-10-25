import Nav from "react-bootstrap/Nav";
import { FaTruck } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import "./index.css";

const NavBar = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="nav-container">
      <Nav.Item className="nav-item">
        <Nav.Link href="/home" className="link-item">
          <FaTruck className="icon" /> MY MOVES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link className="link-item" eventKey="link-1">
          <CgProfile className="icon" /> MY PROFILE
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link className="link-item" eventKey="link-2">
          <FaFileInvoiceDollar className="icon" /> GET QUOTE
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link className="link-item" eventKey="link-1">
          <RiLogoutCircleLine className="icon" /> LOGOUT
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
