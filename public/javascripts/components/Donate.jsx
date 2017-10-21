import React from 'react';
import './Donate.css';

const $ = require('jquery');

export default class Donate extends React.Component {
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
    $.ajax({
      url: 'https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=36868&format=json',
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        this.setState({ donationAmount: data.totalRaisedAmount });
      }.bind(this),
      error(xhr, status, err) {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div className="donate">
        <div className="row show-on-small external-button-large">
          <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=36868">
            DONATE HERE</a>
        </div>
        <div className="row flex">
          <div className="col-xs-4 stretch-on-small">
            <div className="row row-flex">
              <div className="card">
                <div className="card-block">
                  <p className="card-text">Last year we raised $1,000</p>
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <p className="card-text">Extra Life raised $9.6 million in 2016</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4 center hide-on-small contract-on-small external-button-large">
            <div className="row">
              <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=36868">
                DONATE HERE</a>
            </div>
          </div>
          <div className="col-xs-4 stretch-on-small">
            <div className="row row-flex">
              <div className="card">
                <div className="card-block">
                  <p className="card-text">For 2017 we’ve raised: ${this.state.donationAmount}</p>
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <p className="card-text">Extra Life has raised more than $30 million since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
