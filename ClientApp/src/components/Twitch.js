import React from 'react';
import './Donate.css';

export class Twitch extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <div className="about">
        <h2>Watch us on Twitch</h2>
        <div className="row external-button-large show-on-small">
          <a href="https://twitch.tv/Kinzata">Watch Max</a>
        </div>
        <div className="row external-button-large show-on-small">
          <a href="https://twitch.tv/eric_plays_mediocrely">Watch Eric</a>
        </div>
        <div className="row external-button-large show-on-small">
          <a href="https://twitch.tv/Swissninja163">Watch Ian</a>
        </div>
        <div className="row">
          <div className="col-xs-4 external-button-large hide-on-small">
           <a href="https://twitch.tv/Kinzata">Watch Max</a>
          </div>
          <div className="col-xs-4 external-button-large hide-on-small">
          <a href="https://twitch.tv/eric_plays_mediocrely">Watch Eric</a>
          </div>
          <div className="col-xs-4 external-button-large hide-on-small">
          <a href="https://twitch.tv/Swissninja163">Watch Ian</a>
          </div>
        </div>
      </div>
    );
  }
}
