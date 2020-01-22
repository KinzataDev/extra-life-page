import React from 'react';
import { getTeamInfo } from 'extra-life-api';
import { Container } from '../Base/Container';
import Member from './Member';
import './Members.css';

import scheduledata from '../Schedule/ScheduleData';
import userdata from '../User/UserData';

export class Members extends React.Component {
  constructor() {
    super();

    this.state = {
      donationAmount: 0,
    };
  }

  componentDidMount() {
    this.getDonationAmount();
  }

  getDonationAmount() {
    getTeamInfo(45491)
      .then((data) => {
        this.setState({ donationAmount: data.sumDonations });
      })
      .catch(() => {
        // console.log(e);
      });
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

    const schedule = scheduledata['2019'];
    const users = getUsers(schedule);

    return (
      <div id="members" className="members">
        <Container>
            <h2 className="members__totalraised">Total Raised so far: ${this.state.donationAmount}</h2>
            <h3 className="members__title">Team Mediocrely Members</h3>

            {
                users.map(user => (
                    <Member
                        key={user.id}
                        user={user}
                    />
                ))
            }
        </Container>
      </div>
    );
  }
}
