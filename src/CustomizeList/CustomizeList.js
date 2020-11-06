import React, { Component } from 'react';
import FEATURES from '../store';
import './CustomizeList.css';
import Feature from '.././Feature/Feature';

class CustomizeList extends Component {
  render() {
    const { state, updateFeature } = this.props;
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      return (
        <Feature
          key={featureHash}
          featureHash={featureHash}
          feature={feature}
          options={FEATURES[feature]}
          state={state}
          selectedFeature={state.selected[feature].name}
          updateFeature={updateFeature}
        />
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
