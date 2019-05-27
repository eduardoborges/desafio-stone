// eslint-disable

import React, { useState, useEffect } from "react";
import { connect } from "unistore/react";
import { TransactionType, WalletsType, PricesType } from "../../types";
import transactionsActions from "../../actions/transactionsActions";

function WalletSellScreen(props) {
  const WALLETS: WalletsType = props.WALLETS;
  const PRICES: PricesType = props.PRICES;
  // const TRANSACTIONS: TransactionsType = props.TRANSACTIONS;

  const blankForm: TransactionType = {};
  const [form, setForm] = useState(blankForm);
  const [currDest, setCurrDest] = useState('brt');
  const [currSrc, setCurrSrc] = useState('btc');

  // eslint-disable-next-line
  useEffect(() => {
    setForm({ ...form, amount:0, walletSource: props.match.params.id });
  }, []);

  // eslint-disable-next-line
  useEffect(() => {
    const walletDst = WALLETS.data.find(item => item.id === form.walletDestination);
    const walletSrc = WALLETS.data.find(item => item.id === form.walletSource);
    if(walletDst) setCurrDest(walletDst.type);
    if(walletSrc) setCurrSrc(walletSrc.type);
  }, [form]);

  const handleTransact = async () => {
    await props.runSellTransaction(form);
    props.history.push('/wallets');
  }
  
  const calcFinalAmout = ()=> {
    return Number(form.amount * PRICES[currSrc].data.sell).toFixed(2);
  }

  const close = () => props.history.push("/wallets");

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={close} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Ação de Venda</p>
          <button className="delete" aria-label="close" onClick={close} />
        </header>
        <section className="modal-card-body">

          <div className="columns is-multiline">
            
            {/* field */}
            <div className="column is-6">
              <label>
                <b>Carteira Origem</b>
                <div className="select is-fullwidth">
                  <select disabled defaultValue={form.walletSource}>
                    {WALLETS.data.map(wallet => (
                      <option value={wallet.id} key={wallet.id}>{wallet.name}</option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            {/* field */}
            <div className="column is-half">
              <label>
                <b>Carteira Destino (não {currSrc}) </b>
                <div className="select is-fullwidth">
                  <select
                    defaultValue={form.walletDestination}
                    onChange={e => setForm({ ...form, walletDestination: e.target.value })}
                  >
                    <option disabled selected>
                      Selecione...
                    </option>
                    {WALLETS.data.filter( w=> w.type !== currSrc ).map(wallet => (
                      <option value={wallet.id} key={wallet.id}>{wallet.name}</option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            {/* field */}
            <div className="column is-6">
              <label>
                <b>Quantidade</b>
                <div className="field has-addons">
                  <p className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      value={form.amount}
                      onChange={e => setForm({ ...form, amount: e.target.value })}
                    />
                  </p>
                  <p className="control">
                    <a className="button is-medium is-static">BTC</a>
                  </p>
                </div>
              </label>
            </div>

            {/* field */}
            <div className="column is-6">
              <label>
                <b>Valor Final</b>
                <div className="field has-addons">
                  <p className="control">
                    <input
                      className="input is-medium"
                      disabled
                      type="text"
                      value={calcFinalAmout()}
                    />
                  </p>
                  <p className="control">
                    <span className="button is-medium is-static">{String(currDest).toLocaleUpperCase()}</span>
                  </p>
                </div>
              </label>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleTransact}>
            Realizar transação
          </button>
          <button className="button" onClick={close}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default connect(
  "WALLETS,TRANSACTIONS,PRICES",
  transactionsActions
)(WalletSellScreen);
