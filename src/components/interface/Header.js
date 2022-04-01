import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3 py-8">
        <div className="container">
          <a href="/" className="navbar-brand">
            AppContacts
          </a>

          <ul className="navbar-brand">
            <li className="nav-item ml-auto d-inline-block">
              <Link to="/List" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item ml-auto d-inline-block">
              <Link to="/ajouter" className="nav-link">
                Ajouter
              </Link>
            </li>
            <li className="nav-item ml-auto d-inline-block">
              <Link to="/aPropos" className="nav-link">
                À propos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
