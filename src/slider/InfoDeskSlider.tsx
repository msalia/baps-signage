import React, {useEffect, useMemo, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Pages} from '../Constants';
import LogoLoop from '../assets/sliders/logo-loop.mp4';
import Display1 from '../assets/sliders/better-living-wc-display.jpg';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

const DEFAULT_LENGTH_IN_SEC = 30;
const ANIMATION_DURATION_IN_MS = 500;

const useStyles = createUseStyles({
  body: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  slideEnter: {
    opacity: 0.01,
  },
  slideEnterActive: {
    opacity: 1,
    transition: `opacity ${ANIMATION_DURATION_IN_MS}ms ease-in`,
  },
  slideEnterDone: {
    opacity: 1,
  },
  slideLeave: {
    opacity: 1,
  },
  slideLeaveActive: {
    opacity: 0.01,
    transition: `opacity ${ANIMATION_DURATION_IN_MS}ms ease-in`,
  },
  slideLeaveDone: {
    opacity: 0,
  },
  image: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    height: '100%',
    width: '177.77777778vh',
    minWidth: '100%',
    minHeight: '56.25vw',
  },
});

interface Slide {
  lengthInSeconds?: number;
  format?: string;
  type: 'image' | 'video';
  src: string;
}

const SLIDES: Slide[] = [
  {
    lengthInSeconds: 15 * 2, // video length is 15 seconds
    format: 'video/mp4',
    type: 'video',
    src: LogoLoop,
  },
  {
    type: 'image',
    src: Display1,
  },
];

function Image({src}: Slide) {
  const styles = useStyles();
  return (
    <div
      className={styles.image}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
}

function Video({format, src}: Slide) {
  const styles = useStyles();
  return (
    <video
      className={styles.video}
      controls={false}
      autoPlay={true}
      loop={true}
      muted={true}>
      <source src={src} type={format ?? 'video/mp4'} />
    </video>
  );
}

interface Props {}

function InfoDeskSlider(_props: Props) {
  const styles = useStyles();
  const transitionClasses = useMemo(
    () => ({
      enter: styles.slideEnter,
      enterActive: styles.slideEnterActive,
      enterDone: styles.slideEnterDone,
      exit: styles.slideLeave,
      exitActive: styles.slideLeaveActive,
      exitDone: styles.slideLeaveDone,
    }),
    [],
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const nextSlide = (currentSlide + 1) % SLIDES.length;
    const slideData = SLIDES[currentSlide];
    const durationInSeconds =
      slideData.lengthInSeconds ?? DEFAULT_LENGTH_IN_SEC;

    const timeoutID = setTimeout(() => {
      setCurrentSlide(nextSlide);
    }, durationInSeconds * 1000);

    return () => clearTimeout(timeoutID);
  }, [currentSlide]);

  let content = null;
  const slideData = SLIDES[currentSlide];
  switch (slideData.type) {
    case 'image':
      content = <Image {...slideData} />;
      break;
    case 'video':
      content = <Video {...slideData} />;
      break;
  }

  return (
    <div className={styles.body}>
      <SwitchTransition>
        <CSSTransition
          key={currentSlide}
          timeout={ANIMATION_DURATION_IN_MS}
          classNames={transitionClasses}>
          {content}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default InfoDeskSlider;
