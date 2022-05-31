import type {Configs} from './configs/Configs';

import React from 'react';
import {createUseStyles} from 'react-jss';
import Tile from './assets/tile.png';
import {pageState} from './states/states.js';
import {useRecoilValue} from 'recoil';
import {Pages} from './Constants';
import Directions from './Directions';

import Default from './configs/Default';
import SecurityRight from './configs/SecurityRight';

const useStyles = createUseStyles({
  body: {
    backgroundImage: `url(${Tile})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
});

function useConfigs(): Configs {
  const page = useRecoilValue(pageState);
  switch (page) {
    case Pages.SECURITY_RIGHT:
      return SecurityRight;
  }
  return Default;
}

function App() {
  const styles = useStyles();
  const configs = useConfigs();

  return (
    <div className={styles.body}>
      <Directions configs={configs} />
    </div>
  );
}

export default App;
