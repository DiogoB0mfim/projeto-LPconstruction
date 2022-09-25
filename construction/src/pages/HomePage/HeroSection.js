import * as S from "./HsStyled";
import * as I from "./ImagesStyled";
import * as T from "./TextsStyled";
import logo from "../../Assets/MULHER-MAIN-SECTION.png"
import imageMobile from "../../Assets/imageMobile.png"


const HeroSection = () => {
    return (
        <div>
            <S.Container>
                <T.ContainerTexts>
                <h1>GECOM</h1>
                <h3>Tudo em gesso</h3>
                <p>Material, Ferramentas e Equipamentos</p>
                <T.button>Pedero</T.button>
                </T.ContainerTexts>
                <I.ContainerImages>
                <I.Image src={logo} alt="mulher segurando dois capacetes"/>
                <I.ImageMobile src={imageMobile} alt="Fundo roxo com prontilhados laranjas (fru-fru)"/>
                </I.ContainerImages>
            </S.Container>
        </div>
    )
}

export default HeroSection;