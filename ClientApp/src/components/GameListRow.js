/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import GameListGroupItem from './GameListGroupItem';

class GameListRow extends React.Component {
  render() {
    const items = this.props.items;
    const time = this.props.time;

    return (
      <tr>
        <td>{time}</td>
        {
          items.map(column => (
            <GameListGroupItem
              key={column.id + column.name}
              item={column}
            />
          ))
        }
      </tr>
    );
  }
}

GameListRow.propTypes = {
  items: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
};

export default GameListRow;
