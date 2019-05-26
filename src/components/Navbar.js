import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              src="https://www.stone.com.br/wp-content/themes/stone/assets/images/stoneco.png"
              width="120"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/wallets" activeClassName="is-active">
              Wallets
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
