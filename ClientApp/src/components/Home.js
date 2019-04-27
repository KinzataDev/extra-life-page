import React, { Component } from 'react';
import { Header } from './Header';
import { About } from './About';
import { Donate } from './Donate';
import { Twitch } from './Twitch';
import { Schedule } from './Schedule';
// import '../../stylesheets/style.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="clearfix top-margin bottom-margin">
        <div className="col-xs-1" />
        <div className="col-xs-10 content border-shadow">
          <Header />
          <hr />
          <About />
          <hr />
          <Donate />
          <hr />
          <Twitch />
          <hr />
          <Schedule />
        </div>
        <div className="col-xs-1" />
      </div>
    );
  }
}