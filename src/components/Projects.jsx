import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects1 = [
    {
      title: "Simple Portfolio",
      description:
        "This is a very simple portfolio created using only HTML and CSS.",
      imgUrl: "/project-img1.png",
    },
    {
      title: "ToDoList",
      description:
        "This helps to create a todolist for various purposes and delete the tasks once completed",
      imgUrl: "/project-img2.png",
    },
    {
      title: "QR Code Generator",
      description: "This generates a QR Code for any URL entered.",
      imgUrl: "/project-img3.png",
    },
    
  ];

  const projects2 = [
    {
      title: "Keeper App",
      description: "This allows to create notes with custom title and content.",
      imgUrl: "/project-img4.png",
    },

  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have created a number of projects like Portfolio using
                    only HTML and CSS, QR Code Generator, ToDoList, Notes app.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Under Construction</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="/color-sharp2.png"></img>
    </section>
  );
}

export default Projects;
