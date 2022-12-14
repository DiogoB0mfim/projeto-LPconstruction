import styled from "styled-components";

// *Estilização da section About
export const About = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem;
  padding-top: 6rem;
  gap: 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// *Estilização do texto
export const AboutText = styled.div`
  display: flex;
  width: 80%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  text-align: justify;

  @media (max-width: 1366px) {
    font-size: 1.2rem;
    width: 90%;
  }
`;

// *Estilização do titulo
export const AboutTitle = styled.h2`
  font-size: 3rem;
  color: #4f04e1;

  @media (max-width: 766px) {
    font-size: 2.5rem;
  }
`;

// *Estilização da imagem
export const AboutImg = styled.img`
  @media (max-width: 1366px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
