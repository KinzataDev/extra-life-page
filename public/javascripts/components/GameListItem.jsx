import React from 'react';

class GameListItem extends React.Component {
  constructor() {
    super();
    this.onRowClicked = this.onRowClicked.bind(this);
  }

  onRowClicked() {
    window.open(this.props.item.link);
  }

  render() {
    const name = this.props.item.name;
    const time = this.props.item.time;

    return (
      <tr
        className="row-hover hover-pointer"
        onClick={this.onRowClicked}
      >
        <td>{name}</td>
        <td>{time}</td>
      </tr>
    );
  }
}

GameListItem.propTypes = {
  item: React.PropTypes.shape({
    link: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
  }).isRequired,

};

export default GameListItem;
