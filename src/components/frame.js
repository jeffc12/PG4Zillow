import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './frame.scss'


const Frame = ({ photo }) => (
  <div className="card-img-top">
    <img src={photo.url} className="img-fluid" />
    <div className="card-img-overlay">
      <p className="card-caption">{photo.discription}</p>
    </div>
  </div>
);

Frame.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Frame;
