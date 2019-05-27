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
  const [currDest, setCurrDest] = useState("brt");
  const [currSrc, setCurrSrc] = useState("btc");

  const walletId = props.match.params.id;

  // eslint-disable-next-line

  useEffect(()=> {
    setForm({ ...form, walletSource: walletId });
  });

  useEffect(() => {
    setForm({ ...form, amount: 0 });
    const walletSrc = WALLETS.data.find(item => item.id === props.match.params.id);
    if (walletSrc) {
      setCurrSrc(walletSrc.type);
      if (walletSrc.type === "btc") setCurrDest("brt");
      if (walletSrc.type === "brt") setCurrDest("btc");
    }
  }, []);

  useEffect(() => {
    setForm({ ...form, finalAmount: calcFinalAmout() });
  }, [form.amount]);

  const handleTransact = async e => {
    e.preventDefault();
    await props.runSellTransaction(form);
    // props.history.push("/wallets");
  };

  const calcFinalAmout = () => {
    const amount = form.amount || 0;
    const price = PRICES.btc.data;

    //! btc->brt = valor do brt * quantidade
    if (currSrc === "btc" && currDest === "brt") {
      return Number(amount * price.sell).toFixed(2);
    }

    //! brt->btc = quantidade de brt * ( 1 / cotacao  )
    if (currSrc === "brt" && currDest === "btc") {
      return Number(amount * (1 / price.buy)).toFixed(8);
    }
  };

  const close = () => props.history.push("/wallets");

  return (
    <div className="modal is-active">
      <form onSubmit={handleTransact}>
        <div className="modal-background" onClick={close} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Ação de Venda</p>
            <button className="delete" aria-label="close" onClick={close} />
          </header>
          <section className="modal-card-body">
            {/* <pre>
              {JSON.stringify(currSrc)} -> {JSON.stringify(currDest)}
            </pre>
            <pre>{JSON.stringify(form)}</pre>
            <hr /> */}

            <div className="columns is-multiline">
              {/* field */}
              <div className="column is-6">
                <label>
                  <b>Carteira Origem</b>
                  <div className="select is-fullwidth">
                    <select disabled value={form.walletSource}>
                      {WALLETS.data.map(wallet => (
                        <option value={wallet.id} key={wallet.id}>
                          {wallet.name}
                        </option>
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
                      required
                    >
                      <option disabled selected>
                        Selecione...
                      </option>
                      {WALLETS.data
                        .filter(w => w.type !== currSrc)
                        .map(wallet => (
                          <option value={wallet.id} key={wallet.id}>
                            {wallet.name}
                          </option>
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
                        type="float"
                        min={0}
                        value={form.amount}
                        required
                        onChange={e => setForm({ ...form, amount: e.target.value })}
                      />
                    </p>
                    <p className="control">
                      <a className="button is-medium is-static">{currSrc.toLocaleUpperCase()}</a>
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
                        value={form.finalAmount}
                      />
                    </p>
                    <p className="control">
                      <span className="button is-medium is-static">
                        {currDest.toLocaleUpperCase()}
                      </span>
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Realizar transação</button>
            <button className="button" onClick={close}>
              Cancelar
            </button>
          </footer>
        </div>
      </form>
    </div>
  );
}

export default connect(
  "WALLETS,TRANSACTIONS,PRICES",
  transactionsActions
)(WalletSellScreen);
