import type {Configs} from './Configs';

const Default: Configs = {
  alignItems: 'start',
  locations: [
    // {
    //   title: 'Orientation',
    //   directionDegrees: 315,
    // },
    {
      title: 'Information Desk',
      directionDegrees: 270,
    },
    {
      title: 'Mandir',
      subtitle: 'A place of peace that welcomes all',
      directionDegrees: 270,
      timings: [
        {
          startHour: 9,
          endHour: 10.5,
        },
        {
          startHour: 11.25,
          endHour: 12,
        },
        {
          startHour: 16,
          endHour: 18.25,
        },
        {
          startHour: 19,
          endHour: 19.5,
        },
      ],
    },
  ],
};

export default Default;
