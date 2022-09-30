import styled from "styled-components";

// *Estilização DIV comentários
export const CommentsDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

// *Estilização Container comentários
export const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  gap: 1rem;
  width: 90%;
  padding: 40px;
  background-image: linear-gradient(#4f04e1, #a787e4);

  @media (max-width: 1366px) {
    width: 90%;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 85%;
    padding: 0rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

// *Estilização Card comentários
export const CommentsCard = styled.div`
  background-color: #ffff;
  border-radius: 6px;
  padding: 15px;
  width: 29%;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    width: 83%;
  }
`;

export const CommentsCardP = styled.p`
  color: #3d3d3d;
  font-size: 1.25rem;

  @media (max-width: 1366px) {
    font-size: 1rem;
  }
`;

export const CommentsCardH3 = styled.h3`
  @media (max-width: 1366px) {
    font-size: 1.6rem;
  }
`;

export const CommentsTitle = styled.h2`
  font-size: 3rem;
  color: #4f04e1;

  @media (max-width: 766px) {
    font-size: 2.5rem;
  }
`;
