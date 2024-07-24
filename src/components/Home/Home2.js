import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/Myavatar.png";
import Tilt from "react-parallax-tilt";
import {AiFillGithub, AiFillInstagram, AiOutlineMail} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {Slide} from "react-awesome-reveal";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Slide direction="left" triggerOnce>
              <h1 style={{fontSize: "2.6em"}}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and have developed a strong
                passion for it.
                <br />
                <br />I am fluent in
                <i>
                  <b className="purple">
                    {" "}
                    Python, Django, React.js, and PostgreSQL.{" "}
                  </b>
                </i>
                <br />
                <br />
                My areas of interest include building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  working with
                  <b className="purple">
                    {" "}
                    Modern JavaScript Libraries and Frameworks{" "}
                  </b>{" "}
                  like
                  <b className="purple"> React.js.</b>
                </i>
                <br />
                <br />I am committed to creating efficient and user-friendly web
                applications, always striving to improve my skills and
                knowledge.
              </p>
            </Slide>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{borderRadius: "50%"}}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <Slide direction="left" triggerOnce>
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/aashiashfak"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/aashi-ashfak-033bbb2b9/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/aashi_ashfak/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:aashiashfak@gmail.com"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </Slide>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
