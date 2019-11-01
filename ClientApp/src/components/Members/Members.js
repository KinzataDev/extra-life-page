import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import { getTeamInfo, getUserInfo } from 'extra-life-api';
import { Container } from '../Base/Container';
import { CTALink } from '../CTALink/CTALink';
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
            <h2 className="members__title">Team Mediocrely Members</h2>

            {
                users.map(user => (
                    <div className="member clearfix">
                        <div className="member__icon"><img src={user.icon} alt={user.name} /></div>
                        <div className="member__details">
                            <h3 className="member__name">{user.fullname}</h3>
                            <p className="member__bio">{user.bio}</p>
                            <div className="member__donations">
                                <span className="member__donation-raised">### USD Raised</span>
                                <span className="member__donation-num">x Donations Received</span>
                                <div className="member__donate">
                                    <CTALink
                                        link={"https://www.extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=" + user.extralifeuserid}
                                        title='Donate'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="member__inplay">
                            <div className={"twitchembed-" + user.twitchhandle}></div>
                            <ReactTwitchEmbedVideo
                                channel={user.twitchhandle}
                                layout="video"
                                width="390px"
                                height="219px"
                                muted={true}
                                targetClass={"twitchembed-" + user.twitchhandle}
                            />
                        </div>
                    </div>
                ))
            }
        </Container>
      </div>
    );
  }
}
