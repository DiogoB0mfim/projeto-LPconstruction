import styled from "styled-components";

export const ContainerTexts = styled.div`
box-sizing: border-box;
height: 100vh;
width: 50%;
padding-left: 5rem;
line-height: 1rem;
padding-top: 12rem;


@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    line-height: 2rem;
    padding-top: 6rem;
    width: 100vw;
    height: 100vh;
}

h1 {
    color: white;
    font-size: 12rem;
    @media (max-width: 768px) {
        font-size: 5.5rem;
    }
}
h3 {
    color: white;
    font-size: 3rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
   }
}
p {
    color: white;
    font-size: 2rem;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
}
`

export const button = styled.button`
margin-left: 12rem;
height: 5rem;
width: 18rem;
background-color: #4F04E1;
border: none;
color: white;
font-size: 3rem;

@media (max-width: 768px) {
margin-left: -0.1rem;
height: 3rem;
width: 12rem;
background-color: #4F04E1;
font-size: 2.2rem;
}
`