import React from "react";
import "./styles.css";
import svg from './arrow.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={svg} alt="" />
      <div className="footer-circle">
        {/* <svg className="footer-svg" viewBox="0 0 500 150">
          <path
            d="M-50,80 C75,-57 99,80 502,107 L500,150 L-27,215 Z"
            style={{ stroke: "none", fill: "#D75C5F" }}
          ></path>
        </svg> */}
      </div>
    </footer>
  );
};
