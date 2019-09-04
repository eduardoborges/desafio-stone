/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';

import Title from './index';

describe('Title Component', () => {
  it('Must be render childreen sucessfuly', () => {
    const el = shallow(<Title isBigger>Teste</Title>);
    // @ts-ignore
    expect(el.children().equals('Teste')).toBeTruthy();
  });
});
