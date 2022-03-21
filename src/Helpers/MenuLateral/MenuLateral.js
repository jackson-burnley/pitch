import React from "react";
import styles from "./MenuLateral.module.css";
import { Link } from "react-router-dom";

const MenuLateral = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Pipo saúde O/</h1>

      <Link className={styles.item} to="/dashboard/">
        Home
      </Link>
      <Link className={styles.item} to="/dashboard/benef/">
        Beneficiários
      </Link>
      <Link className={styles.item} to="/dashboard/parc/">
        Parceiros
      </Link>
      <Link className={styles.item} to="/dashboard/contato/">
        Contato
      </Link>
      <Link className={styles.item} to="../">
        Sair
      </Link>
    </div>
  );
};

export default MenuLateral;
