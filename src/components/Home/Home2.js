import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import moi from "../../Assets/moi.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez-moi me <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Passionné par l'informatique, j'ai développé une solide expertise dans différents domaines au fil de mes études et projets.
              <br />
              <br />Je maîtrise des langages tels que
              <i>
                <b className="purple"> Java et Javascript, Python, C, C#, C++ ou encore PHP. </b>
              </i>
              <br />
              <br />
              Mon domaine d'intérêt inclut la création de &nbsp;
              <i>
                <b className="purple">solutions logicielles innovantes </b> ainsi que des projets liés à{" "}
                <b className="purple">
                  la cybersécurité et aux infrastructures réseaux.
                </b>
              </i>
              <br />
              <br />
              J'aime également relever des défis en développement d'applications avec
              <i>
                <b className="purple"> des frameworks et langages modernes </b>
              </i>
              , et explorer des environnements immersifs tels que
              <b className="purple"> Unity </b>. Je m'efforce toujours d'allier performance et créativité pour concevoir des solutions utiles et efficaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={moi} className="img-fluid circle-image" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME RETOUVER</h1>
            <p>
              N'hésitez pas à prendre <span className="purple">contact </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/WilliamVPT/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/william-verpoorte-0b74762b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:williamverpoorte.pro@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
