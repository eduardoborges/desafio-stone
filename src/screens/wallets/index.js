import React from "react";
import { Link } from "react-router-dom";
import { WalletsType } from "../../types";
import { connect } from "unistore/react";
import pricesActions from "../../actions/pricesActions";
import { Wallet } from "../../components";

function WalletsScreen(props) {
  const WALLETS: WalletsType = props.WALLETS;

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title">Wallets</h1>
          </div>
          <div className="column has-text-right">
            <Link to="/wallets/create" className="button is-primary is-medium is-rounded">
              Create new Wallet
            </Link>
          </div>
        </div>
        <div className="content">
          <p>
            Aqui voce poderá criar carteiras, fazer vendas para outra carteira de outra moeda.{" "}
            <br /> Pode consultar transações relacionadas a uma determinada carteira.
          </p>
        </div>

        <div className="columns is-multiline">
          {WALLETS.data.map(wallet => (
            <div className="column is-4" key={wallet.id}>
              <Wallet {...wallet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default connect(
  "WALLETS,PRICES",
  pricesActions
)(WalletsScreen);
