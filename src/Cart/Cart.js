import React, { Component } from 'react';
import './Cart.css';

// This object will allow us to
// easily convert numbers into US dollar values
import USCurrencyFormat from '../USCurrencyFormat';

class Cart extends Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = selected[feature];

      return (
        <div className='summary__option' key={featureHash}>
          <div className='summary__option__label'>{feature} </div>
          <div className='summary__option__value'>{selectedOption.name}</div>
          <div className='summary__option__cost'>
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        {summary}
        <div className='summary__total'>
          <div className='summary__total__label'>Total</div>
          <div className='summary__total__value'>
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
