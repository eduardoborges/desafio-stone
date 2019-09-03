/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'unistore/react';
import { AuthActions, AuthState } from 'store/auth/types';
import actions from 'store/auth/actions';
import { Navbar } from 'components';
import { AppState } from 'store';

type Props = AuthState & AuthActions & RouteComponentProps;

const Exchange: React.FC<Props> = (props) => {
  const {
    children, isAuth, isLoading, handleCheckLogin,
  } = props;

  useEffect(() => {
    handleCheckLogin();
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
        <Navbar />
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

const mapStateToProps = (state:AppState) => ({ ...state.AUTH });

export default connect(mapStateToProps, actions)(Exchange);
