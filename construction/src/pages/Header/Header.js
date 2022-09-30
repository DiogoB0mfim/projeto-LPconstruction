import * as S from "./HeaderStyled";
import { useState } from "react";
import logo from "../../Assets/LOGO-HEADER.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("disabled");

  const toggleState = () => {
    if (toggleMenu === "disabled") {
      setToggleMenu("active");
    } else {
      setToggleMenu("disabled");
    }
  };

  //window.scrollTo(0, 750)
  const scrollTop = (param) => {
    window.scrollTo(0, param);
    setToggleMenu("disabled");
  };

  return (
    <S.Header id="header">
      <S.DivTest>
        <S.ImgHeader
          src={logo}
          alt="logo-empresa"
          onClick={() => scrollTop(0)}
        />
      </S.DivTest>
      <S.Nav id="nav" className={toggleMenu}>
        <S.BtnMobile
          onClick={() => toggleState()}
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <S.Hamburger id="hamburger"></S.Hamburger>
        </S.BtnMobile>
        <S.MenuUl id="menu" role="menu">
          <li>
            <S.MenuA href="#About" onClick={() => setToggleMenu("disabled")}>
              SOBRE
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#Crafts" onClick={() => setToggleMenu("disabled")}>
              SERVIÇOS
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#Comments" onClick={() => setToggleMenu("disabled")}>
              COMENTÁRIOS
            </S.MenuA>
          </li>
          <li>
            <S.MenuA
              href="#Advantages"
              onClick={() => setToggleMenu("disabled")}
            >
              VANTAGENS
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#Contatos" onClick={() => setToggleMenu("disabled")}>
              CONTATOS
            </S.MenuA>
          </li>
        </S.MenuUl>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
