import React, {useState} from 'react';

import ActionItemComponent from './ActionItem';

import {nav} from './navItems.json';

function ActionListComponent(props) {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <React.Fragment>
      <ul>
        {nav.map(item => (
          <ActionItemComponent
            name={item.title}
            active={item.id === currentItem}
            icon={item.icon}
            callback={() => setCurrentItem(item.id)}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ActionListComponent;
