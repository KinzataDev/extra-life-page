import React from 'react';
import Header from './Header';
import About from './About';
import Donate from './Donate';
import Schedule from './Schedule';
import '../../stylesheets/style.css';

export default function App() {
  return (
    <div className="row top-margin bottom-margin">
      <div className="col-xs-1" />
      <div className="col-xs-10 content border-shadow">
        <Header />
        <hr />
        <About />
        <hr />
        <Donate />
        <hr />
        <Schedule />
      </div>
      <div className="col-xs-1" />
    </div>
  );
}
