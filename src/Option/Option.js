import React, { Component } from 'react';
import './Option.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import USCurrencyFormat from '../USCurrencyFormat';

class Option extends Component {
  render() {
    const {
      itemHash,
      item,
      feature,
      selectedFeature,
      updateFeature
    } = this.props;
    return (
      <div key={itemHash} className='feature__item'>
        <input
          type='radio'
          id={itemHash}
          className='feature__option'
          name={slugify(feature)}
          checked={item.name === selectedFeature}
          onChange={(e) => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className='feature__label'>
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default Option;
