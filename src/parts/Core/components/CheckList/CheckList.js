import React from 'react';

import CheckItemComponent from './CheckItem';
import {CheckList} from './style';

function CheckListComponent(props) {
  return (
    <CheckList>
      <CheckItemComponent />
    </CheckList>
  );
}

export default CheckListComponent;
