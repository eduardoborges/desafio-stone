import React from 'react';
import { connect } from 'unistore/react'

import pricesActions from '../../actions/pricesActions';

function WalletsScreen(){

  return(){
    <div className="section">
      <h1 className="title">Wallets</h1>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas illum minima officiis, mollitia excepturi voluptates ratione soluta laudantium ipsum ad placeat distinctio, architecto nam porro? Vero exercitationem laboriosam nobis!</p>
      </div>
    </div>
  }
}

export default connect('WALLERTS,PRICES', pricesActions)(WalletsScreen);