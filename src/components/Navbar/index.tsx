/* eslint-disable global-require */
import * as React from 'react';

interface OwnProps {
  isBigger? : boolean
}

type Props = OwnProps;


const Navbar : React.FC<Props> = props => (
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
              buy 0 sell 0
            </small>

          </div>
          <div className="navbar-item">
            <small>
              <b>BRT</b>
              {' '}
              0 sell 0
            </small>
          </div>
          <a aria-current="page" className="navbar-item is-active" href="/wallets">Wallets</a>
        </div>
      </div>
    </div>
  </nav>
  );

export default Navbar;
