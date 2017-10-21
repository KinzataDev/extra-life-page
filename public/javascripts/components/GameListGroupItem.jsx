import React from 'react';
import PropTypes from 'prop-types';
// import './GameListItem.css';

class GameListGroupItem extends React.Component {
  render() {
    const name = this.props.item.name;
    const link = this.props.item.link;

    return (
      <td><a href={link}>{name}</a></td>
    );
  }
}

GameListGroupItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,

};

export default GameListGroupItem;
