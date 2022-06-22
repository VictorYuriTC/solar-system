import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const it = this.props;
    return (<h2>{it.headline}</h2>);
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
