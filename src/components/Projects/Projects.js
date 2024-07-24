import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Evento from "../../Assets/Projects/Evento.png";
import MovieApp from "../../Assets/Projects/MovieApp.png";
import Qrcode from "../../Assets/Projects/Qrcode.png";
import KanbanApp from "../../Assets/Projects/kanbanApp.png";
import SeminiarHall from "../../Assets/Projects/SeminarHall.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: "white"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Evento}
              isBlog={false}
              title="Evento"
              description={`• Evento is an event booking platform designed to cater to three distinct user roles:Admin, Vendor, and User. The platform provides a comprehensive solution forevent management and ticket booking \n• Developed with Django for the backend and React.js for the frontend.`}
              ghLink="https://github.com/aashiashfak/django_restframework_project_evento"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieApp}
              isBlog={false}
              title="Movie App"
              description={`• Developed a web application for listing popular movies and managing favorites.Features include movie listings, a favorites page, and adding/removing moviesfrom favorites.\n• Built with React for front-end and integrated with an external movie API.`}
              ghLink="https://github.com/aashiashfak/movie-app-frontend/"
              demoLink="https://movie-app-frontend-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KanbanApp}
              isBlog={false}
              title="Kanban App"
              description={`• Designed and developed a task management tool with drag drop functionality.\n• Implemented using React, JavaScript, and Tailwind CSS.`}
              ghLink="https://github.com/aashiashfak/kanban-app-frontend"
              demoLink="https://kanban-app-frontend-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Qrcode}
              isBlog={false}
              title="Qrcode Generator"
              description={`• Developed a web application for generating QR codes from provided links or text.\n• Built with React and JavaScript for efficient performance.`}
              ghLink="https://github.com/aashiashfak/qrcode-generator-react"
              demoLink="https://qrcode-generator-react-liart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SeminiarHall}
              isBlog={false}
              title="Seminar Hall Booking"
              description={`• Created a platform for booking seminar halls with user signup/login.\n• Developed with React, Redux for front-end and Django REST framework,PostgreSQL for back-end.`}
              ghLink="https://github.com/aashiashfak/seminar_hall_-frontend"
              demoLink="https://seminar-hall-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
