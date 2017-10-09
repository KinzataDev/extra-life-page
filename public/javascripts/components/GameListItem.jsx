import React from 'react';
import PropTypes from 'prop-types';
import './GameListItem.css';

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
        className="game-list-item"
        onClick={this.onRowClicked}
      >
        <td>{name}</td>
        <td>{time}</td>
      </tr>
    );
  }
}

GameListItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,

};

export default GameListItem;
