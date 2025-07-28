import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/navicon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/atharva-mukul-m-3497ab231/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/ATHARVA-MUJUMDAR?tab=overview&from=2024-06-01&to=2024-06-10">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>&copy; {year}</p>
            <p>All Rights Reserved</p>
            <p>Created and hosted by Atharva Mujumdar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
