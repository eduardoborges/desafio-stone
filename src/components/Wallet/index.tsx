/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Wallet as WalletProps } from 'store/wallets/types';

interface OwnProps {
  handleRemove?(): void,
  handleExchange?(): void
}

type Props = OwnProps & WalletProps;

const Wallet : React.FC<Props> = (props) => {
  const {
    amount, type, name, handleExchange, handleRemove,
  } = props;

  const iconColors = {
    BRT: '06C000',
    BTC: '000000',
  };

  return (
    <div className="box is-primary has-background-light">
      <div className="columns is-multiline">
        <div className="column is-narrow">
          <figure className="image is-48x48">
            <img src={`https://via.placeholder.com/48/${iconColors[type]}/FFFFFF.png?text=${type}`} className="is-rounded" alt="Wallet Type" />
          </figure>
        </div>
        <div className="column">
          <h3 className="title is-4 has-text-primary">{name}</h3>
          <div className="subtitle">
            {type}
            {' '}
            {amount}
          </div>
        </div>
        <div className="column is-full has-text-right">
          <div className="buttons is-right">
            <button type="button" onClick={handleExchange} className="button is-small is-rounded is-primary">Exchange</button>
            <button type="button" onClick={handleRemove} className="button is-small is-rounded">Excluir</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Wallet;
