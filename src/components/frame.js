import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Frame = ({ photo }) => (
  <div>frame</div>
);

Frame.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Frame;
