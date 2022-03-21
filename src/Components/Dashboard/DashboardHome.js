import React from "react";
import MenuLateral from "../../Helpers/MenuLateral/MenuLateral";
import styles from "./DashboardHome.module.css";
import "./DashboardGeral.css"; // CSS que vai ser aplicado em todas as telas

const DashboardHome = () => {
  return (
    <div className="wrapper">
      <MenuLateral />

      <div>
        <h1>
          Olá <span>Fulano</span>
        </h1>
        <p>O que deseja fazer hoje?</p>
      </div>
    </div>
  );
};

export default DashboardHome;
