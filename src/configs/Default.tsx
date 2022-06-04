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
      timings: [
        {
          startHour: 8,
          endHour: 10.5,
        },
        {
          startHour: 11.25,
          endHour: 12.5,
        },
        {
          startHour: 15.5,
          endHour: 18.75,
        },
        {
          startHour: 19,
          endHour: 19.75,
        },
      ],
    },
  ],
};

export default Default;
