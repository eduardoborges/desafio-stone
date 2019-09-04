/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';

import Wallet from './index';

describe('Title Component', () => {
  it('Must be render childreen sucessfuly', () => {
    const el = mount(
      <Wallet name="Teste" type="BRT" id={1} amount={1000}>
        Teste
      </Wallet>,
    );
    expect(el).toBeTruthy();
    el.unmount();
  });
});
