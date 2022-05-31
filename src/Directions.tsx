import type {Configs} from './configs/Configs';

import React from 'react';
import {createUseStyles} from 'react-jss';
import Direction from './Direction';

const useStyles = createUseStyles({
  body: {
    padding: '3em 0',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  justifyLeft: {
    justifyContent: 'left',
  },
  justifyRight: {
    justifyContent: 'right',
  },
});

interface Props {
  configs: Configs;
}

function Directions({configs: {alignItems, locations}}: Props) {
  const styles = useStyles();

  return (
    <div className={styles.body}>
      {locations.map((location, idx) => (
        <Direction
          key={idx}
          location={location}
          alignItems={alignItems}
          isLast={idx === locations.length - 1}
        />
      ))}
    </div>
  );
}

export default Directions;
