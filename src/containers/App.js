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
      position: 0,
      display: []
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const self = this;
    dispatch(fetchData())
      .then((data) => {
        self.setState({display : [data.payload[0]]})
      });
  }

  next(move, prevState) {
    const { gallery } = this.props;
    const self = this;
    const current = self.state.position;
    if (move > 0) {
      if (prevState === gallery.length - 1) {
        this.setState({position: 0})
      } else {
        this.setState({position: prevState + 1})
      }      
    }
    else if (move < 0) {
      if (prevState === 0) {
        this.setState({position: gallery.length - 1})
      } else {
        this.setState({position: prevState - 1})
      }    
    }

   this.setState({display : [gallery[current]]})
  }

  render() {
    return (
      <div>
        <h1>PhotoGallery 4 Zillow</h1>
        <button
          className={'btn btn-primary'}
          onClick={() => this.next(-1, this.state.position)}
        >
          {'<'}
        </button>
        <button
          className={'btn btn-primary'}
          onClick={() => this.next(1, this.state.position)}
        >
          {'>'}
        </button>
          
        <div className='container-fluid'>
          <div className='card-deck'>
            {this.state.display.map((photo, index) => {
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