import style from "./Home.module.css";
import logo from "../../assets/logo_balineras.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const userId = localStorage.getItem("idUser") || "default-user-id";
  const [logedUser, setLogedUser] = useState("");
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);
  const [showCrearUsuario, setShowCrearUsuario] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const navigate = useNavigate();
  const perfilNavRef = useRef(null);

  useEffect(() => {
    const user = users.find((us) => us.id === userId);

    if (user) {
      setLogedUser(user.name);

      if (user.profile === "superadmin") {
        setShowCrearUsuario(true);
      } else {
        setShowCrearUsuario(false);
      }
    } else {
      setLogedUser("No Identificado");
    }

    const handleClickOutside = (event) => {
      if (
        perfilNavRef.current &&
        !perfilNavRef.current.contains(event.target)
      ) {
        setShowLogOut(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [users, userId]);

  const handleLogOut = () => {
    localStorage.removeItem("idUser");

    setShowLogOut(false);
    setLogedUser("");
    navigate("/");
  };

  return (
    <div className={style.divContenedorHome}>
      {loading ? (
        <div className={style.spinnerContainerDiv}>
          <Spinner />
        </div>
      ) : (
        ""
      )}
      <h1>¡ Bienvenido !</h1>
      <img src={logo} alt="logo" />
      <div className={style.divOpcionesHome}>
        <Link to="/Inventario">
          <h3>Inventario</h3>
        </Link>
        <Link to="/Remisiones">
          <h3>Remision</h3>
        </Link>
        <Link to="/Referencias">
          <h3>Referencias</h3>
        </Link>
        <Link to="/clientes">
          <h3>Clientes</h3>
        </Link>
        {showCrearUsuario ? (
          <Link to="/crearUsuarios">
            <h3>Crear Usuarios</h3>
          </Link>
        ) : (
          ""
        )}
        <div className={style.PerfilNav} ref={perfilNavRef}>
          <div
            className={style.divIonIcon}
            onClick={() => setShowLogOut(!showLogOut)}
          >
            <ion-icon name="person-circle-outline"></ion-icon>
            <p>{logedUser}</p>
          </div>
          {showLogOut ? (
            <div className={style.divLogOut}>
              <button onClick={() => handleLogOut()}>Cerrar Sesión</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
