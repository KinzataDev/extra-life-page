import React from 'react';
import GameListRow from './GameListRow';
import './Schedule.css';

import scheduledata from './Schedule/ScheduleData';
import gamedata from './Game/GameData';
import userdata from './User/UserData';

export default class Schedule extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const schedule = scheduledata.halloween2018;
    const unsortedUsers = userdata.filter(row => schedule[row.id] != null);
    const users = [];

    // Sort users by schedule order
    Object.keys(schedule).forEach((key) => {
      unsortedUsers.forEach((user) => {
        if (key === user.id) {
          users.push(user);
        }
      });
    });

    // Convert data to table rows
    const allGames = [];
    users.forEach((user) => {
      const games = schedule[user.id].games;

      games.forEach((game) => {
        let timeIndex = -1;
        for (let i = 0; i < allGames.length; i += 1) {
          if (allGames[i].time === game.time) {
            timeIndex = i;
            break;
          }
        }

        if (timeIndex === -1) {
          allGames.push({
            time: game.time,
            users: [],
          });
          timeIndex = allGames.length - 1;
        }

        let gameLink = '';
        const gamemap = gamedata.filter(gameitem => gameitem.name === game.name);

        if (gamemap.length > 0) {
          gameLink = gamemap[0].link;
        }

        allGames[timeIndex].users.push({
          id: user.id,
          name: game.name,
          link: gameLink,
        });
      });
    });

    // Handle empty time slots
    const numUsers = users.length;
    allGames.forEach((item) => {
      const itemLength = item.users.length;
      if (itemLength < numUsers) {        
        for (let i = 0; i < numUsers; i += 1) {
          const user = users[i];
          const itemUser = item.users[i];
          if (!itemUser || user.id !== itemUser.id) {
            item.users.splice(i, 0, {
              id: user.id,
              name: '',
              link: '',
            });
          }
        }
      }
    });

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
                  users.map(row => (
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
                  users.map(row => (
                    <td className="twitch-link-cell" key={row.name}>
                      <a href={row.twitch}>Watch Me</a>
                    </td>
                  ))
                }
              </tr>
              {
                allGames.map(row => (
                  <GameListRow
                    key={row.time}
                    time={row.time}
                    items={row.users}
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
