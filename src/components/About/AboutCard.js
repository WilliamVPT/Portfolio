import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour je m'appelle <span className="purple">William Verpoorte </span>
            de <span className="purple"> Nevers, France.</span>
            <br />
            Je suis actuellement étudiant en licence informatique à l'Université de Reims Champagne-Ardenne.
            <br />
            J'ai pour objectif de continuer mes études dans un Master spécialisé dans les réseaux et télécommunications.
            <br />
            <br />
            En dehors de l'informatique, voici d'autres activités que j'aime faire:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cuisiner
            </li>
            <li className="about-activity">
              <ImPointRight /> Découvrir de nouvelles choses
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
