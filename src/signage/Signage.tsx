import type {Configs} from './configs/Configs';

import React from 'react';
import {createUseStyles} from 'react-jss';
import Tile from '../assets/tile.png';
import {Pages} from '../Constants';
import Directions from './Directions';

import Default from './configs/Default';
import SecurityRight from './configs/SecurityRight';
import SecurityLeft from './configs/SecurityLeft';

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

function useConfigs(page: Pages): Configs {
  switch (page) {
    case Pages.SECURITY_RIGHT:
      return SecurityRight;
    case Pages.SECURITY_LEFT:
      return SecurityLeft;
  }
  return Default;
}

interface Props {
  page: Pages;
}

function Signage({page}: Props) {
  const styles = useStyles();
  const configs = useConfigs(page);

  return (
    <div className={styles.body}>
      <Directions configs={configs} />
    </div>
  );
}

export default Signage;
