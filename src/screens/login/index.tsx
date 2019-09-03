import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'unistore/react';
import { AuthState, AuthActions } from 'store/auth/types';
import actions from 'store/auth/actions';
import { AppState } from 'store';


type Props = AuthActions & AuthState & RouteComponentProps;

const Login : React.FC<Props> = (props) => {
  const { handleLogin, handleCheckLogin, isLoading } = props;

  useEffect(() => {
    handleCheckLogin();
  }, []);

  return (
    <div className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">Desafio Stone</h1>
          <h2 className="subtitle">Eduardo Borges</h2>
          <button type="button" className={`button is-rouded ${isLoading && 'is-loading'}`} onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
);
};

const mapStateToProps = (state:AppState) => ({ ...state.AUTH });

export default connect(mapStateToProps, actions)(Login);
