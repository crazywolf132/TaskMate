import React from 'react';
import PropTypes from 'prop-types';
import {Inbox, Star, Calendar, Hash, Trash, Users} from 'react-feather';
import {Item, CategorySVG} from '../category/style';

function ActionItemComponent(props) {
  const {name, icon, active, callback} = props;

  function getIcon() {
    switch (icon) {
      case 'star':
        return <Star size="14" />;
      case 'calendar':
        return <Calendar size="14" />;
      case 'hash':
        return <Hash size="14" />;
      case 'users':
        return <Users size="14" />;
      case 'trash':
        return <Trash size="14" />;
      case 'inbox':
      default:
        return <Inbox size="14" />;
    }
  }

  return (
    <Item active={active} onClick={() => callback()}>
      <CategorySVG>{getIcon()}</CategorySVG>
      <span>{name}</span>
    </Item>
  );
}

ActionItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ActionItemComponent;
