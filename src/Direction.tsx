import type {Location} from './configs/Configs';

import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {UIConfigs, UISizes} from './Constants';
import Arrow from './assets/arrow.png';
import classNames from 'classnames';
import moment from 'moment-timezone';

const useStyles = createUseStyles({
  arrow: {
    width: UISizes.ARROW,
  },
  wrapper: {
    padding: `0 ${UISizes.PADDING_VERTICAL}`,
    display: 'grid',
    gridTemplateColumns: `${UISizes.ARROW} 1fr`,
    gridColumnGap: '4em',
    alignItems: 'center',
  },
  wrapperRight: {
    gridTemplateColumns: `1fr ${UISizes.ARROW}`,
  },
  spacer: {
    display: 'inline-block',
    margin: '0 0.2em',
  },
  body: {
    display: 'flex',
    padding: `${UISizes.PADDING_HORIZONTAL} 0`,
    flexDirection: 'column',
    borderBottom: `1px solid ${UIConfigs.COLOR_PRIMARY}`,
  },
  noBorder: {
    border: 'none',
  },
  title: {
    fontFamile: 'Title',
    fontSize: UISizes.FONT_TITLE,
    fontWeight: 'bold',
    color: UIConfigs.COLOR_PRIMARY,
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    fontFamile: 'Body',
    fontSize: UISizes.FONT_SUBTITLE,
    color: UIConfigs.COLOR_PRIMARY,
  },
  timeDisplayGreen: {
    color: UIConfigs.COLOR_GREEN,
  },
  timeDisplayOrange: {
    color: UIConfigs.COLOR_ORANGE,
  },
});

const TZ = 'America/New_York';

function getMoment(hour: number) {
  return moment()
    .hours(Math.floor(hour))
    .minutes(Math.round((hour - Math.floor(hour)) * 60));
}

interface Props {
  location: Location;
  alignItems: 'start' | 'end';
  isLast?: boolean;
  xstyle?: Object;
}

function Direction({
  alignItems,
  isLast,
  location: {directionDegrees, title, subtitle, timings},
  xstyle,
}: Props) {
  const [currTime, setCurrTime] = useState(moment.tz(TZ));
  const styles = useStyles();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrTime(moment.tz(TZ));
    }, 1000);
    return () => clearInterval(intervalID);
  }, [setCurrTime]);

  const arrow = (
    <img
      alt="arrow"
      className={styles.arrow}
      src={Arrow}
      style={{transform: `rotate(${directionDegrees}deg)`}}
    />
  );

  let timeDisplay = null;
  if (timings != null) {
    const {endHour, startHour} = timings;
    const startMoment = getMoment(startHour);
    const endMoment = getMoment(endHour);

    let timeClassName = styles.timeDisplayGreen;
    let timeText = startMoment.isAfter(currTime)
      ? `Opening at ${startMoment.format('h:mma')}`
      : `Open until ${endMoment.format('h:mma')}`;

    const openingDiff = moment.duration(startMoment.diff(currTime));
    if (
      openingDiff.get('hours') < 1 &&
      openingDiff.get('minutes') > 0 &&
      openingDiff.get('minutes') <= 30
    ) {
      timeText = `Opening in ${openingDiff.humanize()}`;
    }

    const closingDiff = moment.duration(endMoment.diff(currTime));
    if (closingDiff.get('hours') < 1 && closingDiff.get('minutes') > 0) {
      timeClassName = styles.timeDisplayOrange;
      timeText = `Closing in ${closingDiff.humanize()}`;
    } else if (currTime.isAfter(endMoment)) {
      timeClassName = styles.timeDisplayOrange;
      timeText = 'Closed';
    }

    timeDisplay = (
      <span key="timeDisplay" className={timeClassName}>
        {timeText}
      </span>
    );
  }

  const subItems = [
    subtitle != null ? <span key="subtitle">{subtitle}</span> : null,
    timeDisplay,
  ].filter((item) => item != null);

  const display = (
    <div
      className={classNames(styles.body, isLast ? styles.noBorder : null)}
      style={{alignItems}}>
      <span className={styles.title}>{title}</span>
      {subItems.length > 0 ? (
        <div className={styles.subtitle}>
          {subItems.map((item, idx) => {
            return (
              <>
                {item}
                {idx !== subItems.length - 1 ? (
                  <span key={idx} className={styles.spacer}>
                    &middot;
                  </span>
                ) : null}
              </>
            );
          })}
        </div>
      ) : null}
    </div>
  );

  return (
    <div
      className={classNames(
        styles.wrapper,
        alignItems === 'end' && styles.wrapperRight,
        xstyle,
      )}>
      {alignItems === 'end' ? (
        <>
          {display}
          {arrow}
        </>
      ) : (
        <>
          {arrow}
          {display}
        </>
      )}
    </div>
  );
}

export default Direction;
