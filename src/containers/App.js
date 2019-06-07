import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData, Photos} from '../actions/index';
import './style.scss';
import Tile from "../components/tile";

class App extends Component {
  static propTypes = {
    gallery: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }
  render() {
    const { gallery } = this.props;
    // console.log(gallery)
    return (
      <div>
        <h1>PhotoGallery 4 Zillow</h1>

        <Tile />
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