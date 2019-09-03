import React from 'react';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { WalletState, WalletActions } from 'store/wallets/types';
import { connect } from 'unistore/react';
import { AppState } from 'store';
import { Wallet } from 'components';
import actions from 'store/wallets/actions';

type Props = RouteComponentProps & WalletState & WalletActions;

const Wallets: React.FC<Props> = (props) => {
  const { data, removeWallet } = props;
  return (
    <>
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title">Carteiras</h1>
        </div>
        <div className="column has-text-right">
          <Link className="button is-rounded is-primary is-medium" to="new">Nova Carteira</Link>
        </div>

      </div>
      <hr />
      <div className="columns">

        {data.map(wallet => (
          <div className="column is-4">
            <Wallet {...wallet} handleRemove={() => removeWallet(wallet)} handleExchange={() => navigate(`/exchange/trade/${wallet.id}`)} />
          </div>
        ))}

        {data.length === 0 && (
          <p className="has-text-centered has-text-grey">
              Parece que vc não tem nenhuma carteira... Que tal criar uma marotinha? ;)
          </p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({ ...state.WALLETS });

export default connect(mapStateToProps, actions)(Wallets);
