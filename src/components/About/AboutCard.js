import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Mohammed Ashfak T </span>
            from <span className="purple"> Malappuram, India.</span>
            <br />I am a passionate{" "}
            <span className="purple">Python full-stack developer</span> with a
            solid foundation in both front-end and back-end technologies.
            <br />
            My experience includes self-driven projects and internships, where
            I've developed skills in Django, React.js, and PostgreSQL.
            <br />
            I am committed to building efficient and user-friendly web
            applications and continuously enhancing my expertise.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashfak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
