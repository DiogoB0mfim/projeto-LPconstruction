import * as S from "./FooterStyled";
import linkedin from "../../Assets/linkedin-socials-footer.png";
import yt from "../../Assets/yt-socials-footer.png";
import twt from "../../Assets/twt-socials-footer.png";
import instagram from "../../Assets/instagram-socials-footer.png";
import facebook from "../../Assets/facebook-socials-footer.png";
import marca from "../../Assets/marca-pederos.png";

const Footer = () => {
  return (
    <S.ContainerFooter id="Contatos">
      <S.Container1St>
        <S.ContainerInfos>
          <div>
            <S.InfosH4>Fale com a gente</S.InfosH4>
            <S.InfosP>0800 000 000</S.InfosP>
            <S.InfosP>socorro@gmail.com</S.InfosP>
          </div>

          <div>
            <S.InfosH4>Endereço</S.InfosH4>
            <S.InfosP>Rua do Bobo, 39</S.InfosP>
            <S.InfosP>4002-8922</S.InfosP>
          </div>
        </S.ContainerInfos>

        <S.ContainerSocialM>
          <img src={linkedin} alt="" />
          <img src={yt} alt="" />
          <img src={twt} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </S.ContainerSocialM>
      </S.Container1St>

      <S.SecondFooter>
        <S.DivBrand>
          <S.ImgBrand src={marca} alt="" />
          <S.InfosP>@2022 Pedero S.A</S.InfosP>
        </S.DivBrand>
        <S.InfosP>Desenvolvido por Max e Diogo</S.InfosP>
      </S.SecondFooter>
    </S.ContainerFooter>
  );
};

export default Footer;
