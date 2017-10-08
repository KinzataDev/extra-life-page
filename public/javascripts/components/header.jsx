import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <div className="row header">
        <div className="col-md-12">
          <h1>Extra Life 2016</h1>
          <h5>November 5th</h5>
        </div>
      </div>
    );
  }
}
