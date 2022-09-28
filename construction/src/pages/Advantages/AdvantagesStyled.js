import styled from "styled-components"

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;

@media (max-width: 1100px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

img {
    position: absolute;
    margin-left: 91.5rem;
    margin-top: 10rem;
    z-index: -10;

    @media (max-width: 1366px) {
        margin-left: 57rem;
        margin-top: -3rem; 
    }
}
`
export const ContainerOptions = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem;
gap: 1rem;
@media (max-width: 1100px) {
    padding-left: 5rem;
    padding-right: 5rem;
}
`
export const Title = styled.h2`
    color: #4F04E1;
    font-size: 5rem;

    @media (max-width: 1366px) {
        font-size: 3rem;
    }
    @media (max-width: 1100px) {
        height: 60%;
    }
    

`
export const Buttons = styled.button`
width: 38rem;
height: 6rem;
background-color: #4F04E1;
border: none;
border-radius: 4px;
color: #ffffff;
font-size: 3rem;
margin: 1rem;

@media (max-width: 1366px) {
        width: 28rem;
        height: 4rem;
        font-size: 2rem;
    }
    @media (max-width: 1100px) {
        width: 20rem;
}
  


:hover{
    background-color: #ffffff;
    border: 2px solid #4F04E1;
    color: #4F04E1;
}
`

export const ContainerExplanation = styled.div`
box-sizing: border-box;
display: flex;
height: 52rem;
width: 50%;
padding: 5rem;
justify-content: center;

@media (max-width: 1366px) {
        height: 38rem;
    }

@media (max-width: 1100px) {
    width: 80%;
    height: 40vh;
    padding: 0;
}
`
export const ContainerText = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;
height: 90%;
width: 100%;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
color: #E65219;
font-size: 5.5rem;
font-weight: bold;
padding: 5rem;

@media (max-width: 1366px) {
        font-size: 3rem;
    }
    @media (max-width: 1100px) {
        padding: 2rem;
       margin-top: 0;
       font-size: 2rem;
}
`