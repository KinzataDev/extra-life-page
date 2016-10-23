import React from "react";
import Header from "./header";
import About from "./about";
import Donate from "./donate";
import Schedule from "./schedule";

export default function App () {
  return (
  	<div className="row top-margin bottom-margin">
		<div className="col-xs-1"></div>
		<div className="col-xs-10 content border-shadow">
			<Header />
      <hr/>
			<About />
      <hr/>
			<Donate />
      <hr/>
			<Schedule />
		</div>
		<div className="col-xs-1"></div>
	</div>
  );
}
