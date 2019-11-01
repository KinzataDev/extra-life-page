import React from 'react';
import { Container } from '../Base/Container';
import './Schedule.css';
import GameListRow from '../GameListRow';

import scheduledata from './ScheduleData';
import gamedata from '../Game/GameData';
import userdata from '../User/UserData';

export class Schedule extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    // Sort users by schedule order
    function getUsers(schedule) {
      const unsortedUsers = userdata.filter(row => schedule[row.id] != null);
      const sortedUsers = [];
      Object.keys(schedule).forEach((key) => {
        unsortedUsers.forEach((user) => {
          if (key === user.id) {
            sortedUsers.push(user);
          }
        });
      });

      return sortedUsers;
    }

    // Convert data to table rows
    function getGameRows(schedule, users) {
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
          let gameImage = '';
          const gamemap = gamedata.filter(gameitem => gameitem.name === game.name);

          if (gamemap.length > 0) {
            gameLink = gamemap[0].link;
            gameImage = gamemap[0].image;
          }

          allGames[timeIndex].users.push({
            id: user.id,
            name: game.name,
            link: gameLink,
            image: gameImage,
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

      return allGames;
    }

    const schedule = scheduledata['2019'];
    const users = getUsers(schedule);
    const gameRows = getGameRows(schedule, users);

    // Refactor out the tab logic to be able to generate from just the data

    return (
      <div id="schedule" className="schedule">
        <Container>
        <div className="schedule__header clearfix">
            <h2 className="schedule__title">Game Schedule</h2>
            <h3 className="schedule__date">Begins Nov. 2nd At 8:00 AM</h3>
        </div>
          <table className="schedule__table">
            <thead>
              <tr>
                <th>Time</th>
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
              <tr className="schedule__inplay">
                <td>In Play</td>
                {
                  users.map(row => (
                    <td key={row.name}>
                      <a className="schedule__watch-link" href={row.twitch}><img src="/images/watch.png" alt="Watch"/></a>
                      <a className="schedule__donate-link" href={"https://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=" + row.extralifeuserid}><img src="/images/donate.png" alt="Donate"/></a>
                    </td>
                  ))
                }
              </tr>
              {
                gameRows.map(row => (
                  <GameListRow
                    key={row.time}
                    time={row.time}
                    items={row.users}
                  />
                ))
              }
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}
