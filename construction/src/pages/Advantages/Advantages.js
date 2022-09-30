import React, { useState } from "react";
import * as V from "./AdvantagesStyled";
import path from "../../Assets/path.png";

export const Advantages = () => {
  const [showDescription, setShowDescription] = useState(
    "Descrição do Serviço"
  );

  const titles = {
    description1: "Texto de Descrição do Primeiro Serviço",
    description2: "Texto de Descrição do Segundo Serviço",
    description3: "Texto de Descrição do Terceiro Serviço",
  };
  return (
    <V.Container id="Advantages">
      <V.ContainerOptions>
        <V.Title>VANTAGENS</V.Title>
        <V.Buttons
          onClick={() => setShowDescription(titles.description1)}
          onMouseOver={() => setShowDescription(titles.description1)}
          onMouseOut={() => setShowDescription("Descrição do Serviço")}
        >
          01 Vantagem
        </V.Buttons>
        <V.Buttons
          onClick={() => setShowDescription(titles.description2)}
          onMouseOver={() => setShowDescription(titles.description2)}
          onMouseOut={() => setShowDescription("Descrição do Serviço")}
        >
          02 Vantagem
        </V.Buttons>
        <V.Buttons
          onClick={() => setShowDescription(titles.description3)}
          onMouseOver={() => setShowDescription(titles.description3)}
          onMouseOut={() => setShowDescription("Descrição do Serviço")}
        >
          03 Vantagem
        </V.Buttons>
      </V.ContainerOptions>
      <V.ContainerExplanation>
        <V.ContainerText>
          <p>{showDescription}</p>
        </V.ContainerText>
        <img src={path} alt="enfeite em forma de mola" />
      </V.ContainerExplanation>
    </V.Container>
  );
};

export default Advantages;
