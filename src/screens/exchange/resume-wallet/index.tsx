/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { connect } from 'unistore/react';
import { AppState } from 'store';
import dayjs from 'dayjs';

interface OwnProps {
  id: string,
}

type Props = RouteComponentProps & AppState & OwnProps;


const NewTransaction: React.FC<Props> = (props) => {
  //
  const {
    TRANSACTIONS: { data: transations }, id,
  } = props;

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Extrato da Carteira</p>
          <button type="button" className="delete" aria-label="close" onClick={() => navigate('/exchange/wallets')} />
        </header>
        <section className="modal-card-body">
          <div className="columns is-multiline">

            {transations
              .filter(
                trans => Number(trans.walletSource) === Number(id)
                || Number(trans.walletDestination) === Number(id),
              )
              .map(trans => (
                <div className="column is-full">
                  <div className="box">
                    <div className="title is-5">#{trans.id} </div>
                    <div className="subtitle is-5">{dayjs(trans.time).format('DD/MM/YYYY [às] hh:mm:ss ')}</div>
                    <small className="has-text-primary">Amount: {trans.amount} • final amount: {trans.finalAmout}</small>
                    <br />
                    <span>
                      <b>From</b> {trans.walletSource} <b>to</b> {trans.walletDestination}
                    </span>
                  </div>
                </div>
            )) }

            {/*  */}
          </div>
        </section>
        <footer className="modal-card-foot" />
      </div>

    </div>
    );
};

const mapStateToProps = (state:AppState) => ({ ...state });

export default connect(mapStateToProps)(NewTransaction);
