import React from "react";

export default class Schedule extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <div className="schedule">
	  	<h2>Game Schedule</h2>
		<table className="table table-hover">
			<thead>
				<tr>
					<th>Game Name</th>
					<th>Time Played</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Rocket League</td>
					<td>8:00 AM</td>
				</tr>
			</tbody>
		</table>
      </div>
    );
  }
}

