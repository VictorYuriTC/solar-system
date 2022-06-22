import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetImage, planetName } = this.props;
    const alternativeText = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ alternativeText } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.node.isRequired,
};

export default PlanetCard;
