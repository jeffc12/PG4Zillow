import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../actions/index';
import './style.scss';
import Frame from "../components/frame";

class App extends Component {
  static propTypes = {
    gallery: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      displayed: null
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }
  render() {
    return (
      <div>
        <h1>PhotoGallery 4 Zillow</h1>
        <div className='container-fuild'>
          <div className='card-deck'>
            {this.props.gallery.map((photo, index) => {
              return <Frame photo={photo} key={index} />;
            })}
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