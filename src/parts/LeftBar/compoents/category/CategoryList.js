import React from 'react';

import CategoryItemComponent from './CategoryItem';
import {CategoryList} from './style';

function CategoryListComponent(props) {
  return (
    <CategoryList>
      <CategoryItemComponent />
      <CategoryItemComponent />
      <CategoryItemComponent />
      <CategoryItemComponent />
    </CategoryList>
  );
}

export default CategoryListComponent;
