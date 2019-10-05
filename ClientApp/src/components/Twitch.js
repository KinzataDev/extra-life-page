import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import '../scss/Donate.css';

export class Twitch extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <Container className="about">
        <h2>Watch us on Twitch</h2>
        <Row className="external-button-large show-on-small">
          <a href="https://twitch.tv/Kinzata">Watch Max</a>
        </Row>
        <Row className="external-button-large show-on-small">
          <a href="https://twitch.tv/eric_plays_mediocrely">Watch Eric</a>
        </Row>
        <Row className="external-button-large show-on-small">
          <a href="https://twitch.tv/ryan_plays_mediocrely">Watch Ryan</a>
        </Row>
        <Row className="external-button-large show-on-small">
          <a href="https://twitch.tv/Swissninja163">Watch Ian</a>
        </Row>
        <Row className="external-button-large show-on-small">
          <a href="https://twitch.tv/atani_39">Watch Emily</a>
        </Row>
        <Row>
          <Col className="external-button-large hide-on-small">
            <center>
              <a href="https://twitch.tv/Kinzata">Watch Max</a>
            </center>
          </Col>
          <Col className="external-button-large hide-on-small">
            <center>
              <a href="https://twitch.tv/eric_plays_mediocrely">Watch Eric</a>
            </center>
          </Col>
          <Col className="external-button-large hide-on-small">
            <center>
              <a href="https://twitch.tv/ryan_plays_mediocrely">Watch Ryan</a>
            </center>
          </Col>
        </Row>
        <Row>
          <Col className="external-button-large hide-on-small">
            <center>
              <a href="https://twitch.tv/Swissninja163">Watch Ian</a>
            </center>
          </Col>
          <Col className="external-button-large hide-on-small">
            <center>
              <a href="https://twitch.tv/atani_39">Watch Emily</a>
            </center>
          </Col>
        </Row>
      </Container>
    );
  }
}
