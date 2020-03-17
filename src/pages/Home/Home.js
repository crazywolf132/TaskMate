import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Theme} from '../../common/theme';
import LeftBar from '../../parts/LeftBar/LeftBar';
import RightBar from '../../parts/RightBar/RightBar';
import CoreComponent from '../../parts/Core/Core';
import {TaskManager} from './style';

function HomeComponent() {
  return (
    <ThemeProvider theme={Theme}>
      <TaskManager>
        <LeftBar />
        <CoreComponent />
        <RightBar />
      </TaskManager>
    </ThemeProvider>
  );
}

export default HomeComponent;
