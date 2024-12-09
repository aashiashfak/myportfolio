import React, {useState, useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import {AiOutlineDownload} from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  // Replace <FILE_ID> with your Google Drive file ID
  const fileID = "1Lr9kHQT1Y7Cj0AyR8we-0sEGXxcG5tXu";
  const drivePreviewLink = `https://drive.google.com/file/d/${fileID}/preview`;
  const driveDownloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{justifyContent: "center", position: "relative"}}>
          <a href={driveDownloadLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" style={{maxWidth: "250px"}}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </a>
        </Row>

        <Row className="resume">
          <iframe
            src={drivePreviewLink}
            style={{
              width: width > 786 ? "80%" : "100%",
              height: "700px",
              border: "none",
            }}
            title="Resume Preview"
            allow="autoplay"
          />
        </Row>

        <Row style={{justifyContent: "center", position: "relative"}}>
          <a href={driveDownloadLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" style={{maxWidth: "250px"}}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
