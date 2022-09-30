import styled from "styled-components"

export const Container = styled.section`
display: flex;
flex-wrap: wrap;
margin: 0 auto;
height: 100%;
width: 100%;
gap: 3rem;
justify-content: center;
margin-top: 3rem;
margin-bottom: 5rem; // RETIRAR DEPOIS DE FAZER A PRÓXIMA SECTION

@media (max-width: 1366px) {
   gap: 1rem;
}

@media (max-width: 766px) {
    gap: 3rem;
}
`
export const FirstCard = styled.div`
box-sizing: border-box;
display: flex;
padding: 1rem;
height: 24rem;
width: 20rem;
border-radius: 4px;
background-image: linear-gradient(#5309F0, #C0AEE3);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

@media (max-width: 1366px) {
    height: 22rem;
    width: 15rem;
}

@media (max-width: 766px) {
    height: 22rem;
    width: 20rem;
}

H3 {
    color: white;
    font-size: 3.2rem;

    @media (max-width: 1366px) {
        font-size: 2.5rem;
}

@media (max-width: 766px) {
        font-size: 3rem;
}
}
`
export const CardServicesGlobal = styled.div`

`
export const CardServices = styled.div`
box-sizing: border-box;
display: flex;
padding: 1rem;
flex-direction: column;
height: 24rem;
width: 20rem;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

@media (max-width: 1366px) {
    height: 22rem;
    width: 15rem;
}

@media (max-width: 766px) {
    height: 22rem;
    width: 20rem;
}

h3 {
    font-size: 2rem;
}

img {
    height: 4rem;
    width: 4rem;
    margin-top: -3rem;
    border-radius: 50%;

    @media (max-width: 1366px) {
        height: 3rem;
        width: 3rem;
}

@media (max-width: 766px) {
    height: 4rem;
    width: 4rem;
}
}

p {
    @media (max-width: 1366px) {
        font-size: 1.2rem;
}
}
`
export const LastCard = styled.div`
box-sizing: border-box;
display: flex;
padding: 1rem;
height: 24rem;
width: 20rem;
border-radius: 4px;
background-image: linear-gradient(#EA5F3E , #FF957C);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

@media (max-width: 1366px) {
    height: 22rem;
    width: 15rem;
}

@media (max-width: 766px) {
    height: 22rem;
    width: 20rem;
}

H3 {
    color: white;
    font-size: 3.2rem;

    @media (max-width: 1366px) {
        font-size: 2.3rem;
}

@media (max-width: 766px) {
        font-size: 3rem;
}
}
`

export const Image = styled.img`
background-image: url(${props => props.img});
height: 20%;
`