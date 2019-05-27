import React, { useState } from "react";
import { WalletType } from "../../types";
import { connect } from "unistore/react";
import actions from "../../actions";

function WalletCreateScreen(props) {
  const blankForm: WalletType = {
    name: "Teste",
    type: "btc"
  };
  const [form, setForm] = useState(blankForm);

  const handleSubmit = () => props.createWallet(form);

  const close = () => props.history.push("/wallets");

  return (
    <div class="modal is-active">
      <div class="modal-background" onClick={close} />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Nova Carteira</p>
          <button class="delete" aria-label="close" onClick={close} />
        </header>
        <section class="modal-card-body">
          <div className="columns is-multiline">
            <div className="column is-6">
              <input
                type="text"
                className="input"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="column is-6">
              <div class="select is-primary is-fullwidth">
                <select
                  value={form.type}
                  defaultValue={form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}
                >
                  <option value="btc">BTC</option>
                  <option value="brt">BRT</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button onClick={handleSubmit} class="button is-success">
            Criar nova carteira
          </button>
          <button class="button" onClick={close}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default connect('',actions)(WalletCreateScreen);