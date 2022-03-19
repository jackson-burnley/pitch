import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, color, bgcolor }) => {
  return (
    <button
      className={styles.buttonDefault}
      style={{ color: color, backgroundColor: bgcolor }}
    >
      {text}
    </button>
  );
};

export default Button;
