import type {Configs} from './Configs';

const Default: Configs = {
  alignItems: 'start',
  locations: [
    {
      title: 'Orientation',
      directionDegrees: 315,
    },
    {
      title: 'Information Desk',
      directionDegrees: 270,
    },
    {
      title: 'Mandir',
      subtitle: 'A Hindu Place of Devotion',
      directionDegrees: 270,
      timings: {
        startHour: 8,
        endHour: 19.75,
      },
    },
  ],
};

export default Default;
