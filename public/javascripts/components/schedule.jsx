import React from "react";

export default class Schedule extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  onRowClicked(url) {
    window.open(url);
  }

  render() {
    var gameList = [
      {
        id: 1,
        name: "Cook, Serve, Delicious",
        time: "8:00am",
        link: "http://store.steampowered.com/app/247020/"
      },
      {
        id: 2,
        name: "Bit Trip Runner 2",
        time: "9:00am",
        link: "http://store.steampowered.com/app/218060/"
      },
      {
        id: 3,
        name: "Rocket League",
        time: "10:00am",
        link: "http://store.steampowered.com/app/252950/"
      },
      {
        id: 4,
        name: "Bioshock Infinite",
        time: "11:00am",
        link: "http://store.steampowered.com/agecheck/app/8870/"
      },
      {
        id: 5,
        name: "Offworld Trading Company Multiplayer",
        time: "1:00pm",
        link: "http://store.steampowered.com/app/271240/"
      },
      {
        id: 6,
        name: "World of Tanks/Warships Multiplayer",
        time: "2:00pm",
        link: "http://na.wargaming.net/"
      },
      {
        id: 7,
        name: "Mordheim Multiplayer",
        time: "4:00pm",
        link: "http://store.steampowered.com/app/276810/"
      },
      {
        id: 8,
        name: "The Witcher 3",
        time: "5:00pm",
        link: "http://store.steampowered.com/app/292030/"
      },
      {
        id: 9,
        name: "Don't Starve Together",
        time: "7:00pm",
        link: "http://store.steampowered.com/app/219740"
      },
      {
        id: 10,
        name: "Killing Floor 2 Multiplayer",
        time: "9:00pm",
        link: "http://store.steampowered.com/agecheck/app/232090/"
      },
      {
        id: 11,
        name: "RimWorld",
        time: "11:00pm",
        link: "http://store.steampowered.com/app/294100/"
      },
      {
        id: 12,
        name: "Sunday, November 6th",
        time: "12:00am",
        link: "http://i.imgur.com/rkt76wH.gifv"
      },
      {
        id: 13,
        name: "Kerbal Space Program",
        time: "1:00am",
        link: "http://store.steampowered.com/app/220200/"
      },
      {
        id: 14,
        name: "DST Rollback",
        time: "2:00am",
        link: "http://s3.amazonaws.com/rapgenius/2-am1.jpg"
      },
      {
        id: 15,
        name: "TBD",
        time: "3:00am",
        link: "http://rlv.zcache.com/shrug_emoticon_%E3%83%84_japanese_kaomoji_wrapping_paper-r5582b5d2d4f940e79492a7819064e254_zkknt_8byvr_324.jpg"
      }
    ];

    var parent = this;

    var gameData = [];
    gameList.map(function(row){
      var obj = <tr className="row-hover hover-pointer" key={row.id} onClick={parent.onRowClicked.bind(parent, row.link)}>
        <td>{row.name}</td>
        <td>{row.time}</td>
      </tr>
      gameData.push(obj);
    });

    return (
      <div className="schedule">
        <div className="col-xs-1"></div>
        <div className="col-xs-10">
  	  	  <h2 className="text-center">Game Schedule</h2>
          <div className="row text-center important-a-tag">
            <a href="http://twitch.tv/kinzata"> Watch me live on Twitch here </a>
          </div>
      		<table className="table table-hover">
      			<thead>
      				<tr>
      					<th>Game Name</th>
      					<th>Time Played</th>
      				</tr>
      			</thead>
      			<tbody>
      				{gameData}
      			</tbody>
      		</table>
        </div>
        <div className="col-xs-1"></div>
      </div>
    );
  }
}
