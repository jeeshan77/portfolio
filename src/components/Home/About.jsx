import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, I'm <span className="yellow">Jeeshan </span>from <span className="yellow"> Delhi, India.</span> As a <span className="yellow">Full-Stack</span> Developer, I thrive on solving challenges and continuously enhancing my skill set.
                  <br />
                  <br />
                I'm proficient in <span className="yellow">React.js</span> and have experience with <span className="yellow">Java, Python, JavaScript, PHP, and MySQL</span>. I have a strong interest in backend technologies like <span className="yellow">Node.js</span> and <span className="yellow">MongoDB</span> , and I enjoy working with modern JavaScript libraries and frameworks, especially<span className="yellow"> React.js</span>.
                {/* I'm currently pursuing a Bachelor's degree in <span className="yellow">Computer Applications. </span> */}
                  {/* As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset. */}
                  

                  {/* <br />I am proficient in
                    <b className="yellow"> React.js, </b>
                    as well as have knowledge in programming languages such as Java, Python, Javascript, Php
                  <b className="yellow"> MySQL.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Node.js, MongoDB,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i> */}
                  <br />
                  <br />
                  I'm passionate about building innovative
                    <b className="yellow"> Web Technologies and Products, </b>
                    and I'm also keen on exploring areas related to <b className="yellow">Artificial Intelligence</b>.
                    <br />
                  I believe in <b className="yellow">writing clean, efficient code</b> and following best practices in development.
                  I'm a <b className="yellow">quick learner</b> who adapts well to new technologies and development environments.
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/jeeshan77"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/jeeshan7704"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/jeeshan-gosain/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/u/jeeshan77/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About