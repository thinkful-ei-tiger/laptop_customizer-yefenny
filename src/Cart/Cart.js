import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
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
        <CartItem
          key={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
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
