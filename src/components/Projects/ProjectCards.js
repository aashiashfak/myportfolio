import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub} from "react-icons/bs";
import {Zoom} from "react-awesome-reveal";
// import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Zoom>
      <Card className="project-card-view d-flex flex-column">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="d-flex flex-column flex-grow-1">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text
            style={{textAlign: "left", whiteSpace: "pre-line"}}
            className="flex-grow-1"
          >
            {props.description}
          </Card.Text>
          <div className="mt-auto">
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{marginLeft: "10px"}}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Zoom>
  );
}

export default ProjectCards;
