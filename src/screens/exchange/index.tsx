/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'unistore/react';
import { AuthActions } from 'store/auth/types';
import { PricesActions } from 'store/prices/types';
import { AppState } from 'store';
import authActions from 'store/auth/actions';
import pricesActions from 'store/prices/actions';
import { combineActions } from 'store/tools';
import { Navbar } from 'components';

type Props = AppState & AuthActions & PricesActions & RouteComponentProps;

const Exchange: React.FC<Props> = (props) => {
  const {
 AUTH: { isAuth, isLoading }, PRICES: { BTC_BRT }, children, handleCheckLogin, handleGetPrices,
} = props;

  useEffect(() => {
    handleCheckLogin();
    handleGetPrices();
  }, []);

  return (
    <>
      <div className={`pageloader ${isLoading && 'is-active'}`}>
        <span className="title">
          <img src="https://www.stone.com.br/static/images/footer/logo-stoneco.svg" alt="" />
        </span>
      </div>

      {/*  */}
      {isAuth && (
      <>
        <Navbar btcPrice={BTC_BRT} brtPrice={BTC_BRT} />
        <div className="section">
          <div className="container">
            {children}
          </div>
        </div>
      </>
      )}
    </>
  );
};

const actions = combineActions(pricesActions, authActions);
const mapStateToProps = (state:AppState) => ({ ...state });

export default connect(mapStateToProps, actions)(Exchange);
