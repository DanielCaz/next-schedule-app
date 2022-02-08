export type ClassType = {
  id: number;
  data: {
    name: string;
    meetingUrl: string;
  };
};

export type scheduleType = {
  id: number;
  day: string;
  classes: {
    id: number;
    classObj: ClassType;
    hours: number;
  }[];
}[];
