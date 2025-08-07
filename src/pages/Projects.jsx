import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
// import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
// import lift from "../assets/projects/lift.png";
import ecommerce from "../assets/projects/electronic-ecommerce.png"
import textanalyzer from "../assets/projects/text-analyzer.png"
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import blog from "../assets/projects/blogwebsite.png"
import qrcode from "../assets/projects/qr-code.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Electronic E-commerce"
              description="An elegant and responsive e-commerce website built to showcase and sell a range of electronic audio accessories including headphones, earphones, neckbands, and earbuds. Designed to provide users with a smooth browsing and shopping experience, the platform highlights modern UI/UX and product-focused design."
              ghLink="https://github.com/jeeshan77/E-commerce"
              demoLink="https://hearwithjee.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textanalyzer}
              isBlog={false}
              title="Text-Analyzer"
              description="The Text Analyzer Website is a web-based application designed to help users analyze, manipulate, and extract insights from textual data efficiently. Built using modern web technologies (such as React, JavaScript, HTML, and CSS), the platform provides a user-friendly interface where users can input or paste any block of text and perform various analytical functions."
              ghLink="https://github.com/jeeshan77/Text-Analyzer"
              demoLink="https://jeeshan77.github.io/Text-Analyzer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Website"
              description="A responsive and modern blogging platform where users can read insightful articles on various topics. This project demonstrates a clean design, dynamic content rendering, and smooth user navigation—ideal for sharing knowledge or personal thoughts online."
              ghLink="https://github.com/jeeshan77/Blog"
              demoLink="https://jeeshan77.github.io/Blog/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrcode}
              isBlog={false}
              title="QR-Code Generator"
              description="A sleek and fast QR Code Generator built using React. This tool allows users to generate QR codes instantly for text, URLs, emails, phone numbers, and more—making it useful for personal, business, or event-based sharing."
              ghLink="https://github.com/jeeshan77/Qr-Code-Generator"
              demoLink="https://qrbyjeeshan.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects