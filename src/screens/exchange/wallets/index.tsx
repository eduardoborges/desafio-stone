import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'unistore/react';

type Props = RouteComponentProps;

const Wallets : React.FC<Props> = (props) => {
  const [value, setValue] = useState<string | undefined>('');
  return (
    <div className="columns">
      <div className="column">
        <h1 className="title">todo: panel</h1>
      </div>
    </div>
  );
};


export default connect('TODOS')(Wallets);
