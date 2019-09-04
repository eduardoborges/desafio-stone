/* eslint-disable global-require */
import * as React from 'react';
import { Price } from 'store/prices/types';
import { Link } from '@reach/router';

interface Props {
  btcPrice: Price,
  brtPrice: Price,
}


const Navbar : React.FC<Props> = (props) => {
  const { btcPrice, brtPrice } = props;
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={require('assets/images/stone-logo.png')} alt="Stone app" />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <small>
                <b>BTC</b>
                {' '}
                buy {btcPrice.buy.toFixed(2)} sell {btcPrice.sell.toFixed(2)}
              </small>

            </div>
            <div className="navbar-item">
              <small>
                <b>BRT</b>
                {' '}
                buy {brtPrice.buy.toFixed(2)} sell {brtPrice.sell.toFixed(2)}
              </small>
            </div>
            <Link to="/exchange/wallets" className="navbar-item">Wallets</Link>
          </div>
        </div>
      </div>
    </nav>
);
};

export default Navbar;
