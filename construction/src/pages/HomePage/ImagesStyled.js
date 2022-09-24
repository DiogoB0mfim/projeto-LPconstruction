import styled from "styled-components";

export const ContainerImages = styled.div`
display: flex;
height: 90vh;
width: 50%;
align-items: flex-end;
justify-content: end;

`
export const Image = styled.img`
background-image: url(${props => props.img});
height: 50rem;
`