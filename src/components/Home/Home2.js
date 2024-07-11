import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillCode,
 
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
        I developed a passion for web development and have acquired substantial experience in building modern web applications
          <br />
          <br />I am proficient in
          <i>
            <b className="purple"> JavaScript, Node.js, Express.js, React, and MongoDB. </b>
          </i>
          <br />
          <br />
          My field of interest includes developing new &nbsp;
          <i>
            <b className="purple">Web Technologies and Products </b> 
          </i>
          using the MERN stack.
          <br />
          <br />
          I also enjoy applying my skills in <b className="purple">HTML, CSS, and Bootstrap</b> to create responsive and dynamic user interfaces.
          <br />
          <br />
          Whenever possible, I work on projects using <b className="purple">Node.js</b> and
          <i>
            <b className="purple"> modern JavaScript libraries and frameworks</b>
          </i>
          &nbsp; such as
          <i>
            <b className="purple"> React.js</b>.
          </i>
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img src={myImg} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
    </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/millath123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codewars.com/users/adila%20millath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillCode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adilamillath/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:adilamillath@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
