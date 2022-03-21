import React from "react";
import MenuLateral from "../../Helpers/MenuLateral/MenuLateral";
import "./DashboardGeral.css"; // CSS que vai ser aplicado em todas as telas

const DashboardParc = () => {
  return (
    <div className="wrapper">
      <MenuLateral />

      <div>
        <h1>Parc</h1>
      </div>
    </div>
  );
};

export default DashboardParc;
