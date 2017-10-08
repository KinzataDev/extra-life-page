import React from 'react';

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
      url: 'http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=233033&format=json',
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log(data);
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
        <div className="row show-on-small">
          <a href="http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=233033">
            DONATE HERE</a>
        </div>
        <div className="row flex">
          <div className="col-xs-4 stretch-on-small">
            <div className="row row-flex">
              <div className="card">
                <div className="card-block">
                  <p className="card-text">Last year we raised $690.28</p>
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <p className="card-text">Extra Life raised $8 million in 2015</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4 center hide-on-small contract-on-small">
            <div className="row">
              <a href="http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=233033">
                DONATE HERE</a>
            </div>
          </div>
          <div className="col-xs-4 stretch-on-small">
            <div className="row row-flex">
              <div className="card">
                <div className="card-block">
                  <p className="card-text">For 2016 we’ve raised: ${this.state.donationAmount}</p>
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <p className="card-text">Extra Life has raised more than $22 million since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
