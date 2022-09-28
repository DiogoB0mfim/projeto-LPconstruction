import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #2b2b2b;
  margin-top: 5rem;
  padding: 3rem;
`;

export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ffff;
  gap: 5rem;

  @media (max-width: 932px) {
    gap: 1.6rem;
  }
`;

export const Container1St = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ffff;
  gap: 5rem;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid black;

  @media (max-width: 932px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const InfosP = styled.p`
  font-weight: 200;
  font-size: 1.25rem;
  line-height: 0.8rem;

  @media (max-width: 932px) {
    font-size: 1rem;
  }
`;

export const InfosH4 = styled.h4`
  font-weight: 600;
  line-height: 1rem;

  @media (max-width: 932px) {
    font-size: 1.1rem;
  }
`;

export const ContainerSocialM = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SecondFooter = styled.div`
  display: flex;
  gap: 20rem;
  justify-content: space-around;
  margin-top: 2rem;
  color: #ffff;

  @media (max-width: 932px) {
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
  }
`;

export const DivBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ImgBrand = styled.img`
  width: 30px;
  height: 30px;
`;
