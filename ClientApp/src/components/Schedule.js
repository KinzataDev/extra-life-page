import React from 'react';
import '../scss/Schedule.css';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import GameListRow from './GameListRow';

import scheduledata from './Schedule/ScheduleData';
import gamedata from './Game/GameData';
import userdata from './User/UserData';

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

    const schedule = scheduledata['2019'];
    const users = getUsers(schedule);
    const gameRows = getGameRows(schedule, users);

    // Refactor out the tab logic to be able to generate from just the data

    return (
      <div className="schedule">
        <div className="col-xs-12">
          <h2>Game Schedule</h2>

          <Nav tabs>
            {/* <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1'})}
                onClick={() => { this.toggle('1'); }}
              >
                Oct 27th (Halloween Special)
            </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Nov 2nd
            </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            {/* <TabPane tabId="1" title="Oct 27th (Halloween Special)">
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
            </TabPane> */}
            <TabPane tabId="1" title="Nov 2nds">
              <table id="main2019" className="table table-hover">
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
                          <a href={row.twitch}>Watch {row.name} Here</a>
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
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}
