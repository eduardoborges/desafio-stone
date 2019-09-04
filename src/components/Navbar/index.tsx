/* eslint-disable global-require */
import * as React from 'react';
import { Price } from 'store/prices/types';

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
                buy {btcPrice.buy} sell {btcPrice.sell}
              </small>

            </div>
            <div className="navbar-item">
              <small>
                <b>BRT</b>
                {' '}
                buy {brtPrice.buy} sell {btcPrice.sell}
              </small>
            </div>
            <a aria-current="page" className="navbar-item is-active" href="/wallets">Wallets</a>
          </div>
        </div>
      </div>
    </nav>
);
};

export default Navbar;
