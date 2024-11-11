import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../images/basic-3d-website.png";
import projImg2 from "../images/hero.png";
import projImg3 from "../images/crud.jpg";
import colorSharp2 from "../images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projects = [
    {
      title: "Library Management System",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imgUrl: projImg1,
    },
    {
      title: "Chiper",
      description: "Created an engaging Chat Application utilizing Android Studio and Firebase, delivering real-time messaging functionalities, secure authentication, and seamless user experiences. Engineered with modern technologies, fostering smooth communication and user connectivity.",
      imgUrl: projImg2,
    },
    {
      title: "CRUD APP",
      description: "Developed a versatile CRUD Application to streamline various tasks, employing JavaScript and express framework to deliver efficient data management solutions.",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Crafted diverse projects spanning Library Management Systems, Chat Applications, and versatile CRUD Applications. Leveraged a spectrum of technologies including Android Studio, Firebase, React, Node.js, Python, and Java, fostering innovation, efficiency, and user-centric solutions across varied domains."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>"Crafted diverse projects spanning Library Management Systems, Chat Applications, and versatile CRUD Applications. Leveraged a spectrum of technologies including Android Studio, Firebase, React, Node.js, Python, and Java, fostering innovation, efficiency, and user-centric solutions across varied domains."</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>"Crafted diverse projects spanning Library Management Systems, Chat Applications, and versatile CRUD Applications. Leveraged a spectrum of technologies including Android Studio, Firebase, React, Node.js, Python, and Java, fostering innovation, efficiency, and user-centric solutions across varied domains."</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
export default Projects