import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const it = this.props;
    const alternativeText = `Planeta ${it.planetName}`;
    return (
      <div data-testid="planet-card">
        <p>{it.planetName}</p>
        <img src={ it.planetImage } alt={ alternativeText } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.node.isRequired,
};

export default PlanetCard;
