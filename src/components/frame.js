import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './frame.scss'


const Frame = ({ photo }) => (
  <div className="container">
  <img src={photo.url} className="img-fluid"/>
    {/* <div className="bottom-left">{photo.url}</div> */}
  ></div>
);

Frame.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Frame;
