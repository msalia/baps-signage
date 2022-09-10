export interface Timing {
  startHour: number;
  endHour: number;
}

export interface Location {
  title: string;
  subtitle?: string;
  directionDegrees: number;
  timings?: Array<Timing>;
}

export interface Configs {
  alignItems: 'start' | 'end';
  locations: Array<Location>;
}
