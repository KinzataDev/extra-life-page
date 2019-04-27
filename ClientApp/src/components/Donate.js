import React from 'react';
import { getTeamInfo } from 'extra-life-api';
import { Row, Col, Container } from 'reactstrap';
import '../scss/Donate.css';

export class Donate extends React.Component {
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
    getTeamInfo(39395)
      .then((data) => {
        this.setState({ donationAmount: data.sumDonations });
      })
      .catch(() => {
        // console.log(e);
      });
  }

  render() {
    return (
      <Container className="donate">
        <Row className="show-on-small external-button-large">
          <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=39395">
            DONATE HERE</a>
        </Row>
        <Row className="flex">
          <Col className="stretch-on-small">
            <div className="card">
              <div className="card-block">
                <p className="card-text">Last year we raised $1,825</p>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <p className="card-text">Extra Life raised $11.1 million in 2017</p>
              </div>
            </div>
          </Col>
          <Col className="hide-on-small contract-on-small external-button-large">
            <center>
              <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=39395">
                DONATE HERE</a>
            </center>
          </Col>
          <Col className="stretch-on-small">

            <div className="card">
              <div className="card-block">
                <p className="card-text">For 2018 we’ve raised: ${this.state.donationAmount}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <p className="card-text">Extra Life has raised more than $40 million since 2008</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
