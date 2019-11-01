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
      maxTotal: 0,
      maxNum: 0,
      ianTotal: 0,
      ianNum: 0,
      emilyTotal: 0,
      emilyNum: 0,
      ryanTotal: 0,
      ryanNum: 0,
    };
  }

  componentDidMount() {
    this.getDonationAmount();
    this.getUserDonations();
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

  getUserDonations() {
    getUserInfo(359073)
      .then((data) => {
        this.setState({ maxTotal: data.sumDonations, maxNum: data.numDonations });
      })
      .catch(() => {
        // console.log(e);
      });

    getUserInfo(386584)
      .then((data) => {
        this.setState({ ianTotal: data.sumDonations, ianNum: data.numDonations });
      })
      .catch(() => {
        // console.log(e);
      });

    getUserInfo(375153)
      .then((data) => {
        this.setState({ emilyTotal: data.sumDonations, emilyNum: data.numDonations });
      })
      .catch(() => {
        // console.log(e);
      });

    getUserInfo(377608)
      .then((data) => {
        this.setState({ ryanTotal: data.sumDonations, ryanNum: data.numDonations });
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
                    <div className="member clearfix">
                        <div className="member__icon"><img src={user.icon} alt={user.name} /></div>
                        <div className="member__details">
                            <h3 className="member__name">{user.fullname}</h3>
                            <p className="member__bio">{user.bio}</p>
                            <div className="member__donations">
                                <span className="member__donation-raised">
                                    {user.extralifeuserid == '359073' ? (
                                        <>{this.state.maxTotal} </>
                                    ) : user.extralifeuserid == '386584' ? (
                                        <>{this.state.ianTotal} </>
                                    ) : user.extralifeuserid == '375153' ? (
                                        <>{this.state.emilyTotal} </>
                                    ) : user.extralifeuserid == '377608' ? (
                                        <>{this.state.ryanTotal} </>
                                    ) : (<></>)}
                                    USD Raised
                                </span>
                                <span className="member__donation-num">
                                    {user.extralifeuserid == '359073' ? (
                                        <>{this.state.maxNum} </>
                                    ) : user.extralifeuserid == '386584' ? (
                                        <>{this.state.ianNum} </>
                                    ) : user.extralifeuserid == '375153' ? (
                                        <>{this.state.emilyNum} </>
                                    ) : user.extralifeuserid == '377608' ? (
                                        <>{this.state.ryanNum} </>
                                    ) : (<></>)}
                                    Donations Received
                                </span>
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
