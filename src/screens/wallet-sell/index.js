import React, { useState, useEffect } from "react";
import { connect } from "unistore/react";
import { TransactionType, TransactionsType, WalletsType, PricesType } from "../../types";
import transactionsActions from "../../actions/transactionsActions";

function WalletSellScreen(props) {
  const WALLETS: WalletsType = props.WALLETS;
  const PRICES: PricesType = props.PRICES;
  const TRANSACTIONS: TransactionsType = props.TRANSACTIONS;

  const blankForm: TransactionType = {};
  const [form, setForm] = useState(blankForm);
  const [currDest, setCurrDest] = useState('brt');
  const [currSrc, setCurrSrc] = useState('btc');

  useEffect(() => {
    setForm({ ...form, amount:0, walletSource: props.match.params.id });
  }, []);

  useEffect(() => {
    const walletDst = WALLETS.data.find(item => item.id === form.walletDestination);
    const walletSrc = WALLETS.data.find(item => item.id === form.walletSource);
    if(walletDst) setCurrDest(walletDst.type);
    if(walletSrc) setCurrSrc(walletSrc.type);
  }, [form]);

  const handleTransact = () => {
    props.runSellTransaction(form);
  };

  const calcFinalAmout = ()=> {
    return form.amount * PRICES[currSrc].data.sell;
  }

  const close = () => props.history.push("/wallets");

  return (
    <div class="modal is-active">
      <div class="modal-background" onClick={close} />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Ação de Venda</p>
          <button class="delete" aria-label="close" onClick={close} />
        </header>
        <section class="modal-card-body">

          

          <hr/>
          <pre>{JSON.stringify(form)}</pre>
            <pre>{JSON.stringify(currDest)} | {JSON.stringify(currSrc)}  </pre>
          <hr/>

          <div className="columns is-multiline">
            
            {/* field */}
            <div className="column is-6">
              <label>
                <b>Carteira Origem</b>
                <div class="select is-fullwidth">
                  <select disabled value={form.walletSource}>
                    {WALLETS.data.map(wallet => (
                      <option value={wallet.id}>{wallet.name}</option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            {/* field */}
            <div className="column is-half">
              <label>
                <b>Carteira Destino</b>
                <div class="select is-fullwidth">
                  <select
                    value={form.walletDestination}
                    onChange={e => setForm({ ...form, walletDestination: e.target.value })}
                  >
                    <option disabled selected>
                      Selecione...
                    </option>
                    {WALLETS.data.map(wallet => (
                      <option value={wallet.id}>{wallet.name}</option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            {/* field */}
            <div className="column is-6">
              <label>
                <b>Quantidade</b>
                <div class="field has-addons">
                  <p class="control">
                    <input
                      class="input is-medium"
                      type="text"
                      value={form.amount}
                      onChange={e => setForm({ ...form, amount: e.target.value })}
                    />
                  </p>
                  <p class="control">
                    <a class="button is-medium is-static">BTC</a>
                  </p>
                </div>
              </label>
            </div>

            {/* field */}
            <div className="column is-6">
              <label>
                <b>Valor Final</b>
                <div class="field has-addons">
                  <p class="control">
                    <input
                      class="input is-medium"
                      disabled
                      type="text"
                      value={calcFinalAmout()}
                    />
                  </p>
                  <p class="control">
                    <span class="button is-medium is-static">{String(currDest).toLocaleUpperCase()}</span>
                  </p>
                </div>
              </label>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" onClick={handleTransact}>
            Realizar transação
          </button>
          <button class="button" onClick={close}>
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
