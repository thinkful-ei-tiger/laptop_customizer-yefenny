import React, { Component } from 'react';
import './CartItem.css';

// This object will allow us to
// easily convert numbers into US dollar values
import USCurrencyFormat from '../USCurrencyFormat';

class CartItem extends Component {
  render() {
    const { feature, selectedOption } = this.props;
    return (
      <div className='summary__option'>
        <div className='summary__option__label'>{feature} </div>
        <div className='summary__option__value'>{selectedOption.name}</div>
        <div className='summary__option__cost'>
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default CartItem;
