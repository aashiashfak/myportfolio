import React from "react";
import {Col, Row} from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNotion,
  SiVercel,
  SiGithub,
  SiPostman,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
