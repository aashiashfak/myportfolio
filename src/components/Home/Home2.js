import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Fade, Slide} from "react-awesome-reveal";
import myImg from "../../Assets/Myavatar.png";
import {AiFillGithub, AiFillInstagram, AiOutlineMail} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Fade
              direction="left"
              duration={2000} // Duration in milliseconds
              delay={500} // Delay before animation starts
            >
              <h1 style={{fontSize: "2.6em"}}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
            </Fade>
            <Fade
              direction="left"
              duration={2000} // Duration in milliseconds
              delay={500} // Delay before animation starts
            >
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
            </Fade>
          </Col>
          <Col md={4} className="myAvtar">
            <Slide
              direction="right"
              duration={2000} // Duration in milliseconds
              delay={500} // Delay before animation starts
            >
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{borderRadius: "50%"}}
              />
            </Slide>
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
                  href="https://www.instagram.com/aashi_ashfak/tagged/?next=%2F"
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
