import React from "react";
import { Link } from "react-router-dom";

function LoginScreen(props) {
  return (
    <div className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">Desafio Stone</h1>
          <h2 className="subtitle">Eduardo Borges</h2>
          <Link to="/wallets" className="button is-large is-rounded">Entrar</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
