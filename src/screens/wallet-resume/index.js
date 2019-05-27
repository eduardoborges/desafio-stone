import React from "react";
import { TransactionsType, WalletsType } from "../../types";
import { connect } from "unistore/react";
import actions from "../../actions";

function WalletResumeScreen(props) {
  const TRANSACTIONS: TransactionsType = props.TRANSACTIONS;
  const WALLETS: WalletsType = props.WALLETS;

  const close = () => props.history.push("/wallets");

  const currWallet = props.match.params.id;
  return (
    <div class="modal is-active">
      <div class="modal-background" onClick={close} />
      <div class="modal-card">
        {/*  */}
        <header class="modal-card-head">
          <p class="modal-card-title">Extrato das movimentações</p>
          <button class="delete" aria-label="close" onClick={close} />
        </header>

        {/*  */}
        <section class="modal-card-body">
          <div className="columns is-multiline">
            {TRANSACTIONS.data
            .filter(t => currWallet === t.walletDestination || currWallet === t.walletSource )
            .map(trans => (
              <div className="column is-12">
                <div className="box">
                  <b>Carteira Origem: </b> <span>{WALLETS.data.find(w=> w.id === trans.walletSource ).name} ({trans.walletSource})</span> <br/>
                  <b>Carteira Destino: </b> <span>{WALLETS.data.find(w=> w.id === trans.walletDestination ).name}  ({trans.walletDestination})</span> <br/>
                  <b>Quantia: </b> <span>{trans.amount} {WALLETS.data.find(w=> w.id === trans.walletSource ).type.toLocaleUpperCase()}</span> <br/>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/*  */}
        <footer class="modal-card-foot">
        </footer>
      </div>
    </div>
  );
}

export default connect(
  "TRANSACTIONS,WALLETS",
  actions
)(WalletResumeScreen);
