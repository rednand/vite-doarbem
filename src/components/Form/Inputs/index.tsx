import React from "react";
import "./styles.css";

interface Props {
  label: string;
}

export const Inputs: React.FC<Props> = ({ label }) => {
  return (
    <div>
      <label className="form__right--label" htmlFor="">{label} </label>
      <input className="form__right--input" type="text" />
    </div>
  );
};
