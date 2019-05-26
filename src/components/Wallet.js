import React from "react";
import { Link } from 'react-router-dom'
import { WalletType } from "../types";

function Wallet(props: WalletType) {
  return (
    <div classNameName="wallet">
      <div className="card">
        <div className="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                {props.type === "btc" && (
                  <img
                    src="https://via.placeholder.com/48/FFA500/FFFFFF.png?text=BTC"
                    className="is-rounded"
                    alt="Placeholder image"
                  />
                )}
                {props.type === "brt" && (
                  <img
                    src="https://via.placeholder.com/48/0000FF/FFFFFF.png?text=BRT"
                    className="is-rounded"
                    alt="Placeholder image"
                  />
                )}
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{props.name}</p>
              <p class="subtitle is-6 has-text-weight-light">{props.amount} {props.type.toUpperCase()}</p> 
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <Link to={`/wallets/${props.id}/sell`} className="card-footer-item">
            Vender
          </Link>
          <Link to={`/wallets/${props.id}/resume`} className="card-footer-item">
            Extrato
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Wallet;
