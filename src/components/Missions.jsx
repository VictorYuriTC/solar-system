import React, { Component } from 'react';
import Title from './Title';
import AllMissions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          AllMissions.map((mission) => (
            <MissionCard
              key={ mission }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))
        }
      </div>
    );
  }
}

export default Missions;
