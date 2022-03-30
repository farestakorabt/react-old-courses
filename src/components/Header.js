import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3 py-8">
        <div className="container">
          <a href="/" className="navbar-brand">
            AppContacts
          </a>
          <ul className="navbar-nav">
            <li className="nav-item ml-auto">Accueil</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
