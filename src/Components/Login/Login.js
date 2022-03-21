import React from "react";
import styles from "./Login.module.css";
import Button from "../../Helpers/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import { UserLogin } from "../../api/api";
import { UserContext } from "../../UserContext";

const Login = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  console.log("nome " + UserLogin.name);

  return (
    <UserContext.Provider value={UserLogin.name}>
      <section className={styles.wrapper}>
        <div className={styles.loginInfo}>
          <h1 className={styles.loginTitle}>Pipo saúde</h1>
          <p className={styles.loginP}>
            Porque saúde e trabalho caminham juntos.
          </p>
          <Button text="Saiba mais" color="#000" bgcolor="#fff" />
        </div>

        <div className={styles.loginMain}>
          <h1 className={styles.loginTitle + " FormTitle"}>Para empresas</h1>
          <form
            className={styles.loginForm}
            onSubmit={(e) => {
              e.preventDefault();
              if (
                login === UserLogin.login &&
                password === UserLogin.password
              ) {
                navigate("/dashboard/");
              }
            }}
          >
            <label htmlFor="login">Empresa:</label>
            <input
              className={styles.input}
              id="login"
              type="text"
              value={login}
              onChange={({ target }) => setLogin(target.value)}
            />
            <label htmlFor="password">Sua senha:</label>
            <input
              className={styles.input}
              id="password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button text="Enviar" color="#fff" bgcolor="#1239B0" />
          </form>
          <p className={styles.loginLost}>
            Perdeu sua conta?{" "}
            <Link className={styles.span} to="/lost/">
              Clique-aqui!
            </Link>
          </p>
        </div>
      </section>
    </UserContext.Provider>
  );
};

export default Login;
