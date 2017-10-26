import React from 'react';
import GameListRow from './GameListRow';
import './Schedule.css';

import data from './Schedule/ScheduleData';

export default class Schedule extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const headerNames = [
      {
        name: 'Maximilian',
        twitch: 'http://twitch.tv/kinzata',
      },
      {
        name: 'Ryan',
        twitch: 'http://twitch.tv/ryan_plays_mediocrely',
      },
      {
        name: 'Andy',
        twitch: 'http://twitch.tv/andsominity',
      },
      {
        name: 'Darrell',
        twitch: 'http://twitch.tv/dmfaber1',
      },
      {
        name: 'Eric',
        twitch: 'http://twitch.tv/eric_plays_mediocrely',
      },
    ];

    return (
      <div className="schedule">
        <div className="col-xs-12">
          <h2>Game Schedule</h2>
          <div className="row external-button-small">
            <a href="http://multitwitch.tv/kinzata/ryan_plays_mediocrely/eric_plays_mediocrely/andsominity/dmfaber1">
              Watch us live on Multi-Twitch here </a>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Time Played</th>
                {
                  headerNames.map(row => (
                    <th key={row.name}>
                      <span>{row.name}</span>
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-column-first twitch-link-cell">
                  Twitch Link
                </td>
                {
                  headerNames.map(row => (
                    <td className="twitch-link-cell" key={row.name}>
                      <a href={row.twitch}>Watch Me</a>
                    </td>
                  ))
                }
              </tr>
              {
                data.map(row => (
                  <GameListRow
                    key={row.id}
                    time={row.time}
                    items={row.items}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
