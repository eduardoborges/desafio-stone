/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import {
 Input, Form, Select,
} from '@rocketseat/unform';
import * as Yup from 'yup';
import { connect } from 'unistore/react';
import { Wallet, WalletActions, WalletState } from 'store/wallets/types';
import { TransactionActions } from 'store/transactions/types';
import transactionActions from 'store/transactions/actions';
import { AppState } from 'store';

interface OwnProps {
  id: string,
}

type Props = RouteComponentProps & WalletActions & TransactionActions & AppState & OwnProps;

const schema = Yup.object().shape({
  destination: Yup.number().required('Destino obrigatório').typeError('Opa...'),
  amount: Yup.number().min(0.0000000001, 'Precisa ser maior que 0 uai...').required('Você está esquecendo algo...'),
});

const NewTransaction: React.FC<Props> = (props) => {
  //
  const {
    WALLETS: { data }, PRICES: { BTC_BRT, BRT_BRL }, id, handleTransaction,
  } = props;

  const [amount, setAmount] = useState<number>(0);
  const [wallet, setWallet] = useState<Wallet>();

  const BRT_BTC = {
    buy: 1 / BTC_BRT.buy,
    sell: 1 / BTC_BRT.sell,
  };

  function getWallet() {
    const wl = data.find(w => Number(w.id) === Number(id));
    setWallet(wl);
  }
  useEffect(getWallet, [id]);

  function handleSubmit(form: any & Wallet) {
    handleTransaction(Number(id), form.destination, form.amount);
    navigate('/exchance/wallets');
  }

  // helper function
  const converToOptions = (ws:Wallet[]) : any[] => ws.map(w => ({ id: w.id, title: w.name }));

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      { wallet ? (
        <div className="modal-card">
          <Form onSubmit={handleSubmit} schema={schema} noValidate>
            <header className="modal-card-head">
              <p className="modal-card-title">Nova Transação</p>
              <button type="button" className="delete" aria-label="close" onClick={() => navigate('/exchange/wallets')} />
            </header>
            <section className="modal-card-body">
              <div className="columns is-multiline">

                {/*  */}
                <div className="column is-6">
                  <div className="label">Carteira de origem</div>
                  <Input
                    className="input is-disabled is-rounded"
                    name="source"
                    value={wallet ? wallet.name : 'Carregando...'}
                    disabled
                  />
                </div>

                {/*  */}
                <div className="column is-6">
                  <div className="label">Carteira Destino</div>
                  <div className="select is-fullwidth is-rounded">
                    <Select
                      name="destination"
                      options={converToOptions(data
                        .filter(w => Number(w.id) !== Number(id))
                        .filter(w => w.type !== wallet.type))
                      }
                    />
                  </div>
                </div>

                {/*  */}
                <div className="column is-6">
                  <div className="label">Valor <b className="has-text-primary">em {wallet.type}</b> </div>
                  <Input
                    name="amount"
                    type="number"
                    min={0}
                    value={amount}
                    onChange={(e:any) => setAmount(e.target.value)}
                    className="input is-large is-rounded"
                  />
                </div>

                {/*  */}
                <div className="column is-6">
                  <div className="label">Valor Final</div>
                  <div className="title has-text-primary">
                    { wallet.type === 'BRT' ? 'BTC' : 'BRT' }
                    {' '}
                    {(wallet.type === 'BRT' ? amount * BRT_BTC.sell : amount * BTC_BRT.sell).toFixed(wallet.type === 'BRT' ? 8 : 2) }
                  </div>
                </div>

                {/*  */}
              </div>
            </section>
            <footer className="modal-card-foot">
              <button type="submit" className="button is-success is-rounded">Efetuar transação</button>
              <button type="button" className="button is-rounded" onClick={() => navigate('/exchange/wallets')}>Cancelar</button>
            </footer>
          </Form>
        </div>
      ) : null }

    </div>
    );
};

const mapStateToProps = (state:AppState) => ({ ...state });

export default connect(mapStateToProps, transactionActions)(NewTransaction);
