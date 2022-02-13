export type classType = {
  id: number;
  data: {
    name: string;
    meetingUrl: string;
  };
};

export type classesType = {
  id: number;
  classObj: classType;
  hours: number;
  location: String;
};

export type scheduleType = {
  id: number;
  day: string;
  classes: classesType[];
}[];
