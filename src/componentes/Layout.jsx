// Layout.jsx

import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import "../Styles/Layout.css";

import {
  FaRegMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { MdLightMode } from "react-icons/md";

function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // MODO OSCURO
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* IZQUIERDA */}
        <div className="nav-izquierda">
          <NavLink className="titulo-nav" to="/">
            <h1>
              Navegar<span>Seguro</span>
            </h1>
          </NavLink>
        </div>

        {/* CENTRO */}
        <div
          className={`nav-centro ${
            menuAbierto ? "activo" : ""
          }`}
        >
          <ul className="links">
            <li>
              <NavLink
                onClick={cerrarMenu}
                to="/"
              >
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={cerrarMenu}
                to="/Riesgos"
              >
                Riesgos de internet
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={cerrarMenu}
                to="/Consejos"
              >
                Consejos
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={cerrarMenu}
                to="/Padres"
              >
                Padres y docentes
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={cerrarMenu}
                to="/Recursos"
              >
                Recursos
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={cerrarMenu}
                to="/Encuesta"
              >
                Encuesta
              </NavLink>
            </li>

            {/* CONTACTO MOBILE */}
            <li className="mobile-contacto">
              <NavLink
                onClick={cerrarMenu}
                to="/Contacto"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        {/* DERECHA */}
        <div className="nav-derecha">
          {/* DARK MODE */}
          <button
            className="btn-moon"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode ? (
              <MdLightMode />
            ) : (
              <FaRegMoon />
            )}
          </button>

          {/* CONTACTO */}
          <NavLink
            id="contacto-boton"
            to="/Contacto"
          >
            Contacto
          </NavLink>

          {/* MENU MOBILE */}
          <button
            className="menu-btn"
            onClick={() =>
              setMenuAbierto(!menuAbierto)
            }
          >
            {menuAbierto ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;