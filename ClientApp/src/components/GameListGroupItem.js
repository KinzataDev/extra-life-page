import React from 'react';
import PropTypes from 'prop-types';

class GameListGroupItem extends React.Component {
  render() {
    const name = this.props.item.name;
    const link = this.props.item.link;
    const image = this.props.item.image;

    return (
      <td className="schedule__game"><a className="schedule__game-link" href={link}><img className="schedule__game-image" src={image} alt="" />{name}</a></td>
    );
  }
}

GameListGroupItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,

};

export default GameListGroupItem;
