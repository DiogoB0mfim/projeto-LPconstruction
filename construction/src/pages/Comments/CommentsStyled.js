import styled from "styled-components";

export const CommentsDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  gap: 1rem;
  width: 85%;
  padding: 40px;
  background-image: linear-gradient(#4f04e1, #a787e4);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 0rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 1366px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const CommentsCard = styled.div`
  background-color: #ffff;
  border-radius: 15px;
  padding: 15px;
  width: 30%;
  height: 100%;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    width: 95%;
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

export const CommentsTitle = styled.h1`
  color: #4f04e1;
`;


