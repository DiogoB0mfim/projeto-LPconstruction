import styled from "styled-components";

export const ContainerImages = styled.div`
display: flex;
width: 50%;
align-items: flex-end;
justify-content: end;
`
export const Image = styled.img`
background-image: url(${props => props.img});
width: 100%;
@media (max-width: 768px) {
    display: none;
}
`
export const ImageMobile = styled.img`
background-image: url(${props => props.img});
display: none;

@media (max-width: 768px) {
    width: 50%;
   display: flex;
   position: absolute;
   margin-top: -150px;
}
`