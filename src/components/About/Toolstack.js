import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLinux,
  SiWindows,
  SiWireshark,
  SiLaravel,
  SiSymfony
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony />
      </Col>
    </Row>
  );
}

export default Toolstack;
