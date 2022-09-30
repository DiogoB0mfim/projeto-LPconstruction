import imgAbout from "../../Assets/homem-lixando-parede.png";
import * as S from "./AboutStyled";

const About = () => {
  return (
    <div id="About">
      <S.About>
        <S.AboutImg src={imgAbout} alt="homem lixando parede" />
        <S.AboutText>
          <S.AboutTitle>Sobre</S.AboutTitle>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </S.AboutText>
      </S.About>
    </div>
  );
};

export default About;
