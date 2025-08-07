import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
// import {
//   SiMaterialui,
//   SiGraphql,
//   SiSolidity,
//   SiRedux,
//   SiMongodb,
//   SiHtml5
// } from "react-icons/si";
import {
  SiTailwindcss,
  SiPython,
  SiPhp,
  SiMysql,
  SiHtml5
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div>
          <h6>React.js</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div>
          <h6>Node.js</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava/>
        <div>
          <h6>Java</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython size={50}/>
        <div>
          <h6>Python</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div>
          <h6>Html</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div>
          <h6>JavaScript</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
        <div>
          <h6>PHP</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div>
          <h6>Mysql</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div>
          <h6>Tailwind</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div>
          <h6>Git</h6>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
