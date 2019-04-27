import React, { Component } from 'react';
import { Header } from './Header';
import { About } from './About';
import { Donate } from './Donate';
import { Twitch } from './Twitch';
import { Schedule } from './Schedule';
import { Row, Col, Container } from 'reactstrap';
import '../scss/Style.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <Container className="clearfix top-margin bottom-margin">
      <Row>
        <Col className="content border-shadow">
          <Header />
          <hr />
          <About />
          <hr />
          <Donate />
          <hr />
          <Twitch />
          <hr />
          <Schedule />
        </Col>
      </Row>
      </Container>
    );
  }
}