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
    getTeamInfo(45491)
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
          <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=45491">
            DONATE HERE</a>
        </Row>
        <Row className="flex">
          <Col className="stretch-on-small">
            <div className="card">
              <div className="card-block">
                <p className="card-text">Last year our team raised $2,234.50</p>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <p className="card-text">Extra Life raised $11.1 million in 2018</p>
              </div>
            </div>
          </Col>
          <Col className="hide-on-small contract-on-small external-button-large">
            <center>
              <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.teamParticipants&teamID=45491">
                DONATE HERE</a>
            </center>
          </Col>
          <Col className="stretch-on-small">

            <div className="card">
              <div className="card-block">
                <p className="card-text">For 2019 we’ve raised: ${this.state.donationAmount}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <p className="card-text">Extra Life has raised more than $50 million since 2008</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
