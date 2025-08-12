import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
// import Particle from "../components/Particle";
// import pg from "../assets/projects/pg.png";
// import project from "../assets/projects/project.jpeg";
// import lift from "../assets/projects/lift.png";
import ecommerce from "../assets/projects/electronic-ecommerce.png"
import textanalyzer from "../assets/projects/text-analyzer.png"
import blog from "../assets/projects/blogwebsite.png"
import qrcode from "../assets/projects/qr-code.png"
import fruitrootz from "../assets/projects/fruits-ecom.png"
import travelogo from "../assets/projects/travelwebsitelogo.png"
import coverflow from "../assets/projects/3dflow.png"
import gaming from "../assets/projects/gaming.png"


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
              imgPath={gaming}
              isBlog={false}
              title="Gaming Website"
              description="Zentrix is a modern, responsive gaming store website designed to deliver an immersive shopping experience for gamers. Featuring a sleek UI, dynamic product displays, and smooth navigation, Zentrix lets users explore and purchase the latest games, consoles, and accessories."
              ghLink="https://github.com/jeeshan77/Zentrix-Gaming"
              demoLink="https://zentrixhq.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coverflow}
              isBlog={false}
              title="3D Coverflow"
              description="3D Coverflow is an interactive web component that displays items, images, or albums in a smooth 3D carousel-style animation. Built with HTML, CSS, Tailwind, and JavaScript, it delivers a visually engaging way to showcase portfolios, products, or media collections."
              ghLink="https://3dflowbyjeeshan.netlify.app/"
              demoLink="https://hearwithjee.netlify.app/"
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
              imgPath={fruitrootz}
              isBlog={false}
              title="Grocery E-commerce"
              description="FruitsRootz is a modern, full-stack e-commerce platform built for selling fresh fruits and vegetables online. Designed with a clean and responsive UI, the website allows users to explore a wide range of organic produce, view best-seller products, and enjoy a smooth shopping experience with real-time cart updates and intuitive navigation."
              ghLink="https://github.com/jeeshan77/Grocery-ecom"
              demoLink="https://jeeshan77.github.io/Grocery-ecom/"
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


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelogo}
              isBlog={false}
              title="Travel Website"
              description="Wanderly is a modern travel website designed to inspire and guide travelers in discovering the world’s most beautiful destinations. It features curated travel spots, weekly offers, and destination guides with a clean, responsive design for a seamless experience on any device. Built with HTML, CSS, JavaScript, and Tailwind CSS, Wanderly combines engaging visuals with smooth navigation to make trip planning effortless."
              ghLink="https://github.com/jeeshan77/Travel-Website"
              demoLink="https://gowanderly.netlify.app/"
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

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects