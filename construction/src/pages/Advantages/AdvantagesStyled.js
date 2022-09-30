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
    margin-left: 29rem;
    margin-top: 4.5rem;

    @media (max-width: 1366px) {
        margin-left: 12rem;
        margin-top: -4.8rem; 
    }
    @media (max-width: 766px) {
        height: 50%;
        width: 50%;
        margin-left: 9.7rem;
        margin-top: 0.8rem; 
        display: none;
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
margin-top: 2rem;
@media (max-width: 1100px) {
    padding-left: 5rem;
    padding-right: 5rem;
}
`
export const Title = styled.h2`
    color: #4F04E1;
    font-size: 3rem;

    @media (max-width: 1366px) {
        font-size: 3rem;
    }
    @media (max-width: 1100px) {
        margin-top: 0;
        height: 2.5;
        font-size: 2.5rem;
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
transition: 1s;


@media (max-width: 1366px) {
        width: 28rem;
        height: 4rem;
        font-size: 2rem;
    }
    @media (max-width: 1100px) {
        width: 21rem;
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
width: 60%;
padding: 4rem;


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
z-index: 5;
background-color: #ffffff;

@media (max-width: 1366px) {
        font-size: 3rem;
    }
    @media (max-width: 1100px) {
        padding: 2rem;
       margin-top: 0;
       font-size: 2rem;
}
`