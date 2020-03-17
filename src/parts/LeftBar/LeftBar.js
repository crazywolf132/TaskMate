import React from 'react';
import CategoryListComponent from './compoents/category/CategoryList';
import {MainStyle, LeftContent} from './style';
import ActionListComponent from './compoents/action/ActionList';
import ButtonComponent from './compoents/buttons/Buttons';

function LeftBar(props) {
  return (
    <MainStyle>
      <ButtonComponent />
      <LeftContent>
        <ActionListComponent />
        <CategoryListComponent />
      </LeftContent>
    </MainStyle>
  );
}

export default LeftBar;
