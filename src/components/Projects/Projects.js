import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import jeuurca from "../../Assets/Projects/jeuurca.png";
import android from "../../Assets/Projects/android.png";
import cisco from "../../Assets/Projects/cisco.png";
import bdd from "../../Assets/Projects/bdd.png";
import hypercube from "../../Assets/Projects/hypercube.png";
import indid from "../../Assets/Projects/indid.png";
import password from "../../Assets/Projects/password.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes derniers <strong className="purple">Travaux</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici certains de mes derniers projets. Vous pourrez retrouver d'autres travaux sur mon Github. La liste suivante est une petite sélection.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Site web Portfolio"
              description="Il s'agit du site sur lequel vous vous trouvez actuellement, réalisé grâce à Next.js et React dans le but de me présenter et de vous montrer quelques-unes de mes compétences."
              ghLink="https://github.com/WilliamVPT/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indid}
              isBlog={false}
              title="InDiD"
              description="Participation au projet nationale InDiD, en exportant le programme de communication des véhicules sur un système embarqué de type MK5."
              ghLink="https://github.com/WilliamVPT/Compte-rendu-Stage-Lab-I-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeuurca}
              isBlog={false}
              title="Jeu de l'URCA"
              description="Une application web réalisée avec Laravel dans le but de renseigner les équipes, les joueurs, les épreuves, les matchs et les résultats d'une compétition sportive."
              ghLink="https://github.com/WilliamVPT/JeuURCA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Application Android"
              description="Une application mobile permettant de générer des mots de passe grâce à différentes données relatives au système du téléphone ou à différentes API."
              ghLink="https://github.com/WilliamVPT/Android_Password"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cisco}
              isBlog={false}
              title="Simulation Cisco"
              description="Simulation dans Cisco Packet Tracer pour la création de sous-réseaux incluant différents types de serveurs."
              ghLink="https://github.com/WilliamVPT/Simulation_Cisco"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bdd}
              isBlog={false}
              title="Agence de recrutement"
              description="Conception d'une base de données pour une agence de recrutement avec des requêtes SQL et PL/SQL."
              ghLink="https://github.com/WilliamVPT/BDD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hypercube}
              isBlog={false}
              title="Hypercube"
              description="Mise en place de la communication complète d'un token se déplaçant entre des processus sous la forme d'un hypercube, codé en C."
              ghLink="https://github.com/WilliamVPT/Hypercube"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password Manager"
              description="Création d'un gestionnaire de mots de passe en Python, permettant de créer des mots de passe sécurisés, de les stocker et de les consulter."
              ghLink="https://github.com/WilliamVPT/Password-Manager"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
