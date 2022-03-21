import React from "react";
import MenuLateral from "../../Helpers/MenuLateral/MenuLateral";
import "./DashboardGeral.css"; // CSS que vai ser aplicado em todas as telas

const DashboardContato = () => {
  return (
    <div className="wrapper">
      <MenuLateral />

      <div>
        <h1>Contato</h1>
      </div>
    </div>
  );
};

export default DashboardContato;
