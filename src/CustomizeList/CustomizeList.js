import React, { Component } from 'react';
import FEATURES from '../store';
import './CustomizeList.css';
import USCurrencyFormat from '../USCurrencyFormat';

import slugify from 'slugify';

class CustomizeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state, updateFeature } = this.props;
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className='feature__item'>
            <input
              type='radio'
              id={itemHash}
              className='feature__option'
              name={slugify(feature)}
              checked={item.name === state.selected[feature].name}
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
          {options}
        </fieldset>
      );
    });
    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default CustomizeList;
