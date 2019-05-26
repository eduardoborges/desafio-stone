import React from "react";
import { connect } from 'unistore/react';

function WalletCreateScreen(props) {
  const close = () => props.history.push("/wallets");
  return (
    <div class="modal is-active">
      <div class="modal-background" onClick={close} />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Nova Carteira</p>
          <button class="delete" aria-label="close" onClick={close} />
        </header>
        <section class="modal-card-body">...</section>
        <footer class="modal-card-foot">
          <button class="button is-success">Criar nova carteira</button>
          <button class="button" onClick={close}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default WalletCreateScreen;
