import React from "react";

import "../../styles/project.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Project(props) {
  return (
    <Row xs={1} md={2} className="g-5">
      {props.projects.map((project) => (
        <Col key={project.id}>
          <Card className="rounded-0 h-100">
            <a href={project.demoURL} target="_blank" rel="noopener noreferrer">
              <Card.Img
                variant="top"
                src={project.screenshot}
                alt="Project screenshot"
                className="rounded-0 greyscaleImg"
              />
            </a>
            <Card.Body>
              <h3>{project.name}</h3>
              <h4>{project.type}</h4>
              <p>
                <i>{project.technologies}</i>
              </p>
              <Card.Text>{project.descriptionSummary}</Card.Text>
              <Card.Text>{project.descriptionElaboration}</Card.Text>
              <Button
                variant="primary"
                href={project.repoURL}
                target="_blank"
                rel="noopener noreferrer"
                className="me-2">
                CODE
              </Button>{" "}
              {project.demoURL ? (
                <Button
                  variant="primary"
                  href={project.demoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2">
                  DEMO
                </Button>
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
