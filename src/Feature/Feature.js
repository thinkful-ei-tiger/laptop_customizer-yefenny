import React, { Component } from 'react';
import './Feature.css';
import slugify from 'slugify';
import USCurrencyFormat from '../USCurrencyFormat';

class Feature extends Component {
  render() {
    const {
      featureHash,
      feature,
      options,
      updateFeature,
      selectedFeature
    } = this.props;
    const featureOptions = options.map((item) => {
      const itemHash = slugify(JSON.stringify(item));
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
    });
    return (
      <fieldset className='feature' key={featureHash}>
        <legend className='feature__name'>
          <h3>{feature}</h3>
        </legend>
        {featureOptions}
      </fieldset>
    );
  }
}

export default Feature;
