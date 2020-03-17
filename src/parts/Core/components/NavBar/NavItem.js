import React from 'react';
import PropTypes from 'prop-types';
import {NavItem, Item, NavLabel} from './style';

function NavItemComponent(props) {
  const {name, id, checked, callBack} = props;
  return (
    <NavItem onClick={() => callBack()}>
      <Item name="nav" for={id} checked={checked} />
      <NavLabel for={id} checked={checked}>
        {name}
      </NavLabel>
    </NavItem>
  );
}

NavItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  callBack: PropTypes.func.isRequired,
};

export default NavItemComponent;
