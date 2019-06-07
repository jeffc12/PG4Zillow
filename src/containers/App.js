import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../actions/index';
import './style.scss';
import Frame from "../components/frame";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

class App extends Component {
  static propTypes = {
    gallery: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      position: 0,
      display: []
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const self = this;
    
    dispatch(fetchData())
      .then((data) => {
        self.setState({
          loaded: true,
          display: data.payload.map(photo => photo)
        })
      })

  }

  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className="card card-inverse text-center" >
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              showIndicators={false}
              emulateTouch={true}>
              {this.state.loaded ? this.state.display.map((photo, index) => {
                return <div><Frame photo={photo} key={index} /></div>
              }) : ''}
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { gallery } = state.Reducer;
  return {
    gallery
  };
};

export default connect(mapStateToProps)(App);