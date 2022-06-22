import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const it = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {it.planetName}
        </p>
        <div>
          {it.planetImage}
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.node.isRequired,
};

export default PlanetCard;
