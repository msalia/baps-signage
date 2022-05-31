export interface Timings {
  startHour: number;
  endHour: number;
}

export interface Location {
  title: string;
  subtitle?: string;
  directionDegrees: number;
  timings?: Timings;
}

export interface Configs {
  alignItems: 'start' | 'end';
  locations: Array<Location>;
}
