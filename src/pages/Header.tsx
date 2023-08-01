import "./Header.css";
import { useState } from "react";
import imgLogo from "../assets/logo.svg";
import imgMenu from "../assets/icon-menu.svg";
import imgCarrinho from "../assets/icon-cart.svg";
import imgAvatar from "../assets/image-avatar.png";
import closeIcon from "../assets/icon-close.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState("openMenu");

  const openMenuFunc = () => {
    setOpenMenu("menuOpened");
  };

  const closeCartFunc = () => {
    setOpenMenu("openMenu");
  };

  return (
    <div className="Header">
      <div className="menuDiv">
        <img
          src={imgMenu}
          alt="ícone para abrir o menu"
          onClick={openMenuFunc}
          className="iconMenu"
        />
        <img src={imgLogo} alt="logo da loja Sneakers" className="iconLogo" />
        
      </div>

      <div className={openMenu}>
        <img
          src={closeIcon}
          alt="elemento para fechar a aba menu simbolizada por um X"
          className="closeIcon"
          onClick={closeCartFunc}
        />
        <ul>
          <li>Coleções</li>
          <li>Moda masculina</li>
          <li>Moda feminina</li>
          <li>Sobre nós</li>
          <li>Contatos</li>
        </ul>
      </div>

      <div className="acessoAoPerfilDiv">
        <img src={imgCarrinho} alt="ícone para abrir o carrinho de compras" />
        <span></span>
        <img
          src={imgAvatar}
          alt="ícone de acesso ao seu perfil"
          className="avatarImg"
        />
      </div>
    </div>
  );
};

export default Header;
