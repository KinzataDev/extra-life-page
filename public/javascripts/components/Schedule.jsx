import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import GameListRow from './GameListRow';
import './Schedule.css';

import scheduledata from './Schedule/ScheduleData';
import gamedata from './Game/GameData';
import userdata from './User/UserData';

export default class Schedule extends React.Component {
  constructor() {
    super();

    this.state = {
    };
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

      return allGames;
    }

    const scheduleHalloween = scheduledata.halloween2018;
    const usersHalloween = getUsers(scheduleHalloween);
    const gameRowsHalloween = getGameRows(scheduleHalloween, usersHalloween);
    
    const schedule2018 = scheduledata['2018'];
    const users2018 = getUsers(schedule2018);
    const gameRows2018 = getGameRows(schedule2018, users2018);

    return (
      <div className="schedule">
        <div className="col-xs-12">
          <h2>Game Schedule</h2>

          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="Oct 27th (Halloween Special)">
              <table id="halloween2018" className="table table-hover">
              <thead>
                <tr>
                  <th>Time Played</th>
                  {
                    usersHalloween.map(row => (
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
                    usersHalloween.map(row => (
                      <td className="twitch-link-cell" key={row.name}>
                        <a href={row.twitch}>Watch Me</a>
                      </td>
                    ))
                  }
                </tr>
                {
                  gameRowsHalloween.map(row => (
                    <GameListRow
                      key={row.time}
                      time={row.time}
                      items={row.users}
                    />
                  ))
                }
              </tbody>
              </table>
            </Tab>
            <Tab eventKey={2} title="Nov 3rd (Main Event)">
              <table id="main2018" className="table table-hover">
              <thead>
                <tr>
                  <th>Time Played</th>
                  {
                    users2018.map(row => (
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
                    users2018.map(row => (
                      <td className="twitch-link-cell" key={row.name}>
                        <a href={row.twitch}>Watch Me</a>
                      </td>
                    ))
                  }
                </tr>
                {
                  gameRows2018.map(row => (
                    <GameListRow
                      key={row.time}
                      time={row.time}
                      items={row.users}
                    />
                  ))
                }
              </tbody>
              </table>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
