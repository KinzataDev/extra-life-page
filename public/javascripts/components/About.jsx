import React from 'react';

export default class About extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <div className="about">
        <h2>What is Extra Life?</h2>
        <div className="row">
          <div className="col-xs-6 purpose">
            <p>Extra Life unites thousands of players around the world in a 24 hour gaming marathon to support
              Children’s Miracle Network Hospitals.  Since its inception in 2008, Extra Life has raised more than $30
              million for local CMN Hospitals.  This year I am participating in the 24 hour marathon for the second time
              in order to raise money.
              <br />
              Want to know more?  Visit <a href="http://www.extra-life.org/">Extra Life</a> here!
            </p>
          </div>
          <div className="col-xs-6 cmh">
            <p>Children’s Miracle Network Hospitals® raises funds and awareness for 170 member hospitals that provide 32
              million treatments each year to kids across the U.S. and Canada. Donations stay local to fund critical
              treatments and healthcare services, pediatric medical equipment and charitable care.  By donating through
              my Extra Life page, you’ll be directly supporting the Children’s Hospital of Wisconsin.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
