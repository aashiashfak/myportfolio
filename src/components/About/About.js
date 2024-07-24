import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Fade, Slide} from "react-awesome-reveal";
import Particle from "../Particle";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: "center", padding: "10px"}}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Fade direction="left" duration={2000} delay={500}>
              <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Fade>
          </Col>
          <Col
            md={5}
            style={{paddingTop: "120px", paddingBottom: "50px"}}
            className="about-img"
          >
            <Slide direction="right" duration={2000} delay={500}>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Slide>
          </Col>
        </Row>
        <Fade direction="up" duration={2000} delay={500}>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </Fade>
        <Fade direction="up" duration={2000} delay={500}>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Fade>
      </Container>
    </Container>
  );
}

export default About;
