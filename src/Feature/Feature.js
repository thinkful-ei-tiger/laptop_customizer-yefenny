import React, { Component } from 'react';
import Option from '../Option/Option';
import './Feature.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Feature extends Component {
  render() {
    const { feature, options, updateFeature, selectedFeature } = this.props;
    const featureOptions = options.map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Option
          key={itemHash}
          itemHash={itemHash}
          feature={feature}
          item={item}
          selectedFeature={selectedFeature}
          updateFeature={updateFeature}
        />
      );
    });
    return (
      <fieldset className='feature'>
        <legend className='feature__name'>
          <h3>{feature}</h3>
        </legend>
        {featureOptions}
      </fieldset>
    );
  }
}

export default Feature;
