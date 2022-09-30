import * as S from "./CommentsStyled";
import pessoa1 from "../../Assets/pessoa-comments01.png";
import pessoa2 from "../../Assets/pessoa-comments02.png";
import estrelas from "../../Assets/5stars.png";

const Comments = () => {
  return (
    <S.CommentsDiv id="Comments">
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <S.CommentsContainer>
        <S.CommentsCard>
          <img src={pessoa1} alt="imagem pessoa" />
          <S.CommentsCardH3>Maria</S.CommentsCardH3>
          <S.CommentsCardP>
            Adoro o serviço da pederos, são muito bons com gesso haha.
          </S.CommentsCardP>
          <img src={estrelas} alt="5 estrelas" />
        </S.CommentsCard>

        <S.CommentsCard>
          <img src={pessoa2} alt="imagem pessoa" />
          <S.CommentsCardH3>Jorge</S.CommentsCardH3>
          <S.CommentsCardP>
            Adoro o serviço da pederos, são muito bons com gesso haha.
          </S.CommentsCardP>
          <img src={estrelas} alt="5 estrelas" />
        </S.CommentsCard>

        <S.CommentsCard>
          <img src={pessoa2} alt="imagem pessoa" />
          <S.CommentsCardH3>Carlos</S.CommentsCardH3>
          <S.CommentsCardP>
            Adoro o serviço da pederos, são muito bons com gesso haha.
          </S.CommentsCardP>
          <img src={estrelas} alt="5 estrelas" />
        </S.CommentsCard>
      </S.CommentsContainer>
    </S.CommentsDiv>
  );
};

export default Comments;
