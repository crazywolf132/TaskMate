import React, {useState} from 'react';
import {Navbar} from './style';
import NavItemComponent from './NavItem';

function NavBarComponent(props) {
  const [currentItem, setCurrentItem] = useState(0);
  const navOptions = [
    {
      name: 'All',
      id: 0,
    },
    {
      name: 'Important',
      id: 1,
    },
    {
      name: 'Notes',
      id: 2,
    },
    {
      name: 'Links',
      id: 3,
    },
  ];

  return (
    <Navbar>
      {navOptions.map(opt => (
        <NavItemComponent
          name={opt.name}
          id={opt.id}
          key={opt.id}
          checked={opt.id === currentItem}
          callBack={() => {
            setCurrentItem(opt.id);
          }}
        />
      ))}
    </Navbar>
  );
}

export default NavBarComponent;
