import React, { Component } from 'react';

// Slider for Price Range
import Slider from 'rc-slider'; // Slider used for price range
import '!style-loader!css-loader!rc-slider/assets/index.css'; // Requires style-loader package to work
// Slider config to add tooltip
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class AdvSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { priceRange, updateParentState } = this.props;
    return(
      <div className="adv-search-section">
        <div className="default-button pink-btn adv-search-btn">ADVANCED SEARCH</div>
        <div className="qpl">
          <button className="default-button">QUALIFICATIONS<span><i className="fa fa-angle-down" aria-hidden="true"></i></span></button>
          <div className="default-button price-range-btn">
            PRICE RANGE
            <div className="price-range-slider-container">
              <Range
                className="price-range-slider"
                defaultValue={ [0, 200000] }
                min={ 0 }
                max={ 200000 }
                value={ priceRange }
                allowCross={ false }
                onChange={ (val) => updateParentState({priceRange: val}) }
                marks={ { 0: <div className="center-text left-mark"><strong>$0</strong></div>, 200000: <div className="center-text right-mark"><strong>$200,000+</strong></div> } }
              />
            </div>
          </div>


          <button className="default-button">LOCATION<span><i className="fa fa-angle-down" aria-hidden="true"></i></span></button>
        </div>

        <div className="location-btns">
          <button>ON CAMPUS</button>
          <button>ONLINE</button>
        </div>

        <button className="default-button pink-btn submit-btn">SUBMIT</button>
      </div>

    )
  }
}