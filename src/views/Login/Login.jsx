import style from "./Login.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import logo from "../../assets/logo_influential.png";
import logoGoogle from "../../assets/logo_google.png";

const Login = () => {
  const [seePass, setSeePass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSeePass = () => {
    setSeePass(!seePass);
  };

  return (
    <div className={style.divLogin}>
      <div className={style.containerLogin}>
        <div className={style.encabezadoLogin}>
          <img src={logo} alt="logo" />
          <h1>Bienvenido de nuevo !</h1>
          <h5>Por favor ingresa tus datos</h5>
        </div>
        <div className={style.contenedorInputsAndButtons}>
          <div className={style.mailAndPassDiv}>
            <div className={style.divPassword}>
              <input type="email" placeholder="Email" />
            </div>
            <div className={style.divPassword}>
              <input
                type={seePass ? "text" : "password"}
                placeholder="Contraseña"
              />
              <div className={style.divSeePass} onClick={() => handleSeePass()}>
                <ion-icon name="eye-outline"></ion-icon>
              </div>
            </div>
            <div className={style.recordarmeAndPass}>
              <div className={style.recordarmeDiv}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label>Recordarme</label>
              </div>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          <div className={style.buttonsDiv}>
            <button className={style.loginButton}>Iniciar sesión</button>
            <button className={style.googleLoginButton}>
              <img
                src={logoGoogle}
                alt="Google logo"
                className={style.googleLogo}
              />
              Iniciar con google
            </button>
          </div>
        </div>
        <div className={style.registroDiv}>
          <h5>¿No tenes cuenta?</h5>
          <a href="%">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
