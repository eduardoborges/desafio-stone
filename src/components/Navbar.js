import React from "react";
import { NavLink } from "react-router-dom";
import { PricesType } from '../types'
import { connect } from 'unistore/react';
 
function Navbar(props) {

  const PRICES : PricesType = props.PRICES;
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              src="https://www.stone.com.br/wp-content/themes/stone/assets/images/stoneco.png"
              width="120"
              alt="Stone app"
            />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <small><b>BTC</b> buy {PRICES.btc.data.buy} sell {PRICES.btc.data.buy}</small> 
            </div>
            <div className="navbar-item">
              <small><b>BRT</b> buy {PRICES.brt.data.buy} sell {PRICES.brt.data.buy}</small>  
            </div>
            <NavLink className="navbar-item" to="/wallets" activeClassName="is-active">
              Wallets
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default connect('PRICES')(Navbar);
