import React from "react";
import "./styles.css";
import wave from "./../../assets/imgs/Subtract.svg";
import logo from "./../../assets/imgs/logo.svg";
import face from "./../../assets/imgs/facebook.svg";
import insta from "./../../assets/imgs/insta.svg";
import linkedin from "./../../assets/imgs/linkedin.svg";
import whats from "./../../assets/imgs/whatsapp.svg";

export const Footer = () => {
  return (
    <footer>
      <div
        className="footer__content"
        style={{ backgroundImage: `url(${wave})` }}
      >
        <div className="footer__circle">
          <img src={logo} alt="logo da Doar Bem" />
        </div>
        <div className="footer__upbottom">
          <div className="footer__text">
            <p> Lorem ipsum dolor sit amet</p>
            <p> Lorem ipsum dolor sit amet</p>
            <p> Lorem ipsum dolor sit amet</p>
          </div>
          <div className="footer__redes">
            <p>Venha nos conhecer!</p>
            <div>
              <a href="">
                <img src={linkedin} alt="icone do linkedin" width={56} />
              </a>
              <a href="">
                <img src={face} alt="icone do facebook" width={56} />
              </a>
              <a href="">
                <img src={insta} alt="icone do instagram" width={52} />
              </a>
              <a href="">
                <img src={whats} alt="icone do whatsapp" width={52} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          Somos uma plataforma que conecta ongs e pessoas que querem contribuir
          para uma sociedade melhor.
        </div>
      </div>
    </footer>
  );
};
