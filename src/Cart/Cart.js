import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';
import './Cart.css';

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
        <Total total={total} />
      </section>
    );
  }
}

export default Cart;
