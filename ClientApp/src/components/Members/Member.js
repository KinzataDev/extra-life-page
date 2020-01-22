import React from 'react';
import PropTypes from 'prop-types';
import { getUserInfo } from 'extra-life-api';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import { CTALink } from '../CTALink/CTALink';

class Member extends React.Component {
  constructor() {
    super();

    this.state = {
      sumDonations: 0,
      numDonations: 0,
    };
  }


  componentDidMount() {
    this.getUserDonation();
  }

  getUserDonation() {
    getUserInfo(this.props.user.extralifeuserid)
      .then((data) => {
        this.setState({ sumDonations: data.sumDonations, numDonations: data.numDonations });
      })
      .catch((e) => {
        //console.log(e);
      });
  }

  render() {
    const user = this.props.user;

    return (
      <div className="member clearfix">
          <div className="member__icon"><img src={user.icon} alt={user.name} /></div>
          <div className="member__details">
              <h3 className="member__name">{user.fullname}</h3>
              <p className="member__bio">{user.bio}</p>
              <div className="member__donations">
                  <span className="member__donation-raised">
                      {this.state.sumDonations} USD Raised
                  </span>
                  <span className="member__donation-num">
                      {this.state.numDonations} Donations Received
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
    );
  }
}

Member.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    twitchhandle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    extralifeuserid: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default Member;
