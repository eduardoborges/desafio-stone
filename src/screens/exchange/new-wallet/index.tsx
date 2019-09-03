/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { Input, Form, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { connect } from 'unistore/react';
import actions from 'store/wallets/actions';
import { Wallet, WalletActions } from 'store/wallets/types';
import { AppState } from 'store';

type Props = RouteComponentProps & WalletActions;

const schema = Yup.object().shape({
  name: Yup.string().min(4).required('Nome obrigatório'),
  type: Yup.string().required('Tipo obrigatório'),
});

const Wallets: React.FC<Props> = (props) => {
  const { createWallet } = props;

  const handleSubmit = (formData: any & Wallet) => {
    const wallet = { id: Date.now(), ...formData };
    createWallet(wallet);
    navigate('/exchange/wallets');
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <Form onSubmit={handleSubmit} schema={schema} noValidate>
          <header className="modal-card-head">
            <p className="modal-card-title">Nova Carteira</p>
            <button type="button" className="delete" aria-label="close" onClick={() => navigate('/exchange/wallets')} />
          </header>
          <section className="modal-card-body">
            <div className="columns is-multiline">
              <div className="column is-6">
                <Input name="name" type="text" className="input is-rounded" placeholder="Defina um nome" />
              </div>
              <div className="column is-6">
                <div className="select is-fullwidth  is-rounded">
                  <Select
                    name="type"
                    placeholder="Escolha uma moeda"
                    options={[
                      {
                        id: 'BRT',
                        title: 'BRT',
                      },
                      {
                        id: 'BTC',
                        title: 'BTC',
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button type="submit" className="button is-success is-rounded">Criar nova carteira</button>
            <button type="submit" className="button  is-rounded" onClick={() => navigate('/exchange/wallets')}>Cancelar</button>
          </footer>
        </Form>
      </div>
    </div>
    );
};

const mapStateToProps = (state:AppState) => ({ ...state.WALLETS });

export default connect(mapStateToProps, actions)(Wallets);
