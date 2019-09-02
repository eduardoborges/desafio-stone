import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { connect } from 'unistore/react';
import { AuthState, AuthActions } from 'store/auth/types';
import actions from 'store/auth/actions';


type Props = AuthActions & AuthState & RouteComponentProps;

const Login : React.FC<Props> = props => (
  <div className="hero is-fullheight is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-2">Desafio Stone</h1>
        <h2 className="subtitle">Eduardo Borges</h2>
        <Link className="button is-large is-rounded" to="/exchange">Entrar</Link>
      </div>
    </div>
  </div>
);


export default connect('TODOS', actions)(Login);
