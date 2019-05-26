import React from "react";
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
            <div className="button is-primary is-medium is-rounded">Create new Wallet</div>
          </div>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas illum minima
            officiis, mollitia excepturi voluptates ratione soluta laudantium ipsum ad placeat
            distinctio, architecto nam porro? Vero exercitationem laboriosam nobis!
          </p>
        </div>

        <div className="columns is-multiline">
          {[{ name: "Teste", type: "btc",amount: 0.2434 }].map(wallet => (
            <div className="column is-4">
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
