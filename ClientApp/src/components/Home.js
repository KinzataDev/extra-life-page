import React, { Component } from 'react';
import { Header } from './Header/Header';
import { InfoCarousel } from './InfoCarousel/InfoCarousel';
import { About } from './About/About';
import { DonateHeader } from './DonateHeader/DonateHeader';
import { Members } from './Members/Members';
import { Schedule } from './Schedule/Schedule';
import '../scss/Base.css';
import '../scss/h5bp/normalize.css';
import '../scss/h5bp/main.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <>
          <Header />
          <InfoCarousel />
          <About />
          <DonateHeader />
          <Members />
          <Schedule />
      </>
    );
  }
}