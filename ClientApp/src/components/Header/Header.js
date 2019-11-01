import React, { Component } from 'react';
import { Container } from '../Base/Container';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Container>
          <span className="header__link"><img src="/images/icon-home.png" alt="Home"/></span>
          <span className="header__link"><img src="/images/logo-team-mediocrely.png" alt="Home"/></span>
          <a className="header__link" href="#members">Donate</a>
          <a className="header__link" href="#about">About</a>
          <a className="header__link" href="#schedule">Schedule</a>
        </Container>
      </header>
    );
  }
}
