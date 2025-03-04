import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Étudiant en informatique",
          "Administrateur Système",
          "Étude des systèmes de sécurité",
          "Développeur WEB",
          "Développeur Système Embarquée",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
