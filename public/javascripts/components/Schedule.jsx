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
        twitch: null,
      },
      {
        name: 'Darrell',
        twitch: null,
      },
      {
        name: 'Eric',
        twitch: 'http://twitch.tv/eric_plays_mediocrely',
      },
    ];

    return (
      <div className="schedule">
        <div className="col-xs-1" />
        <div className="col-xs-10">
          <h2>Game Schedule</h2>
          <div className="row external-button-small">
            <a href="http://twitch.tv/kinzata"> Watch us live on Multi-Twitch here </a>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Time Played</th>
                {
                  headerNames.map(row => (
                    <th key={row.name}>
                      {
                        row.twitch !== null
                          ? <a href={row.twitch}>{row.name}</a>
                          : <span>{row.name}</span>
                      }

                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
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
        <div className="col-xs-1" />
      </div>
    );
  }
}
