import * as C from "./CraftsStyled"
import pincel from "../../Assets/pincel-do-max.png"

const Crafts = () => {
    return (
        <C.Container>
            <C.FirstCard><h3>COMO PODEMOS TE AJUDAR</h3></C.FirstCard>
            <C.CardServices>
                <img src={pincel} alt="ícone de pincel"/>
                <h3>Título</h3>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            </C.CardServices><C.CardServices>
            <img src={pincel} alt="ícone de pincel"/>
                <h3>Título</h3>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            </C.CardServices><C.CardServices>
            <img src={pincel} alt="ícone de pincel"/>
                <h3>Título</h3>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            </C.CardServices>          
            <C.LastCard><h3>SERVIÇOS DE ALTA QUALIDADE</h3></C.LastCard>
        </C.Container>
    )

}

export default Crafts