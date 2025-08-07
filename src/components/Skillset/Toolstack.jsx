import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiBootstrap ,
  SiCodepen,
  SiVercel,
  SiNetlify
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
        <div>
          <h6>VS Code</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap  />
        <div>
          <h6>BootStrap</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodepen  />
        <div>
          <h6>Codepen</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div>
          <h6>Vercel</h6>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div>
          <h6>Netlify</h6>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
