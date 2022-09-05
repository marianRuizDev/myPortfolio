import header from "./header.css";
import Navbar from "../Navbar/Navbar";
import Social from "../Social Media/Social";
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <div className="wraper">
            <div className="headerwrap"> 
                <Nav className="links-header" as="ul">
                    <Nav.Item>
                        <Nav.Link href="#home">
                                <h1 className="logo">Mariangel Ruiz</h1>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#projects">
                             <div>
                                <h1 className="links-nav">Projects</h1>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact">
                             <div>
                                <h1 className="links-nav">Contact</h1>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="socials">
                <Social />
                </div>
            </div>
        </div>
    )
}

export default Header;



<Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>