import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto;
height: 100%;
width: 100%;
gap: 3rem;
justify-content: center;
margin-top: 3rem;
margin-bottom: 5rem; // RETIRAR DEPOIS DE FAZER A PRÓXIMA SECTION
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

H3 {
    color: white;
    font-size: 3.2rem;
}
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

h3 {
    font-size: 2rem;
}

img {
    height: 20%;
    margin-top: -3rem;
    margin-left: -13rem;
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

H3 {
    color: white;
    font-size: 3.2rem;
}
`

export const Image = styled.img`
background-image: url(${props => props.img});
height: 20%;
`