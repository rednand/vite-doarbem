import React from "react";
import "./styles.css";
import logo from "./../../assets/imgs/logo.svg";
import formImage from "./../../assets/imgs/formImage.png";

export const Form = () => {
  return (
    <div className="form">
      <div className="form__left">
        <h1>Esperando por você.</h1>
        <h3>
          Sua <span>doação</span> pode ajudar a escrever a história de milhares
          de pessoas.
        </h3>
        <img src={formImage} alt="" />
      </div>
      <div className="form__right">
        <img src={logo} alt="" />
        <p>Preencha o formulário</p>
        <div className="form__right--inputs">
          <label htmlFor=""> perspiciatis unde omnis </label>
          <input className="form__right--input" type="text" />

          <label htmlFor=""> perspiciatis unde omnis </label>
          <input className="form__right--input" type="text" />

          <label htmlFor=""> perspiciatis unde omnis </label>
          <input className="form__right--input" type="text" />

          <label htmlFor=""> perspiciatis unde omnis </label>
          <input className="form__right--input" type="text" />

          <label id="form__right--label-term" htmlFor="termos">
            Termos
          </label>

          <label className="form__right--term-label">
            <input type="checkbox" />
            <span className="checkbox__text">Eu li e aceito os termos de Privacidade</span>
            <span className="checkmark"></span>
          </label>
          <button type="submit">ENVIAR COM ALEGRIA</button>
        </div>
      </div>
    </div>
  );
};
