import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: space-around;
height: 90vh;
width: 100%;
background-color: #E65219;

@media (max-width: 768px) {
   height: 80vh;
   align-items: center;
   padding-top: 5rem;
}
`
