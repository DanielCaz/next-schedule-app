type ClassType = {
  id: string;
  data: {
    name: string;
    meetingUrl: string;
  };
};

type scheduleType = {
  id: number;
  day: string;
  classes: {
    id: number;
    classObj: ClassType;
    hours: number;
  }[];
}[];

const claseLibre: ClassType = {
  id: "1",
  data: {
    name: "Libre",
    meetingUrl: "",
  },
};

export const getSchedule = (
  claseABD: ClassType,
  claseFIS: ClassType,
  claseG: ClassType,
  claseLA: ClassType,
  claseRDC: ClassType,
  claseTSO: ClassType
): scheduleType => {
  return [
    {
      id: 1,
      day: "Lunes",
      classes: [
        {
          id: 1,
          classObj: claseG,
          hours: 1,
        },
        {
          id: 2,
          classObj: claseLA,
          hours: 2,
        },
        {
          id: 3,
          classObj: claseFIS,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseLibre,
          hours: 2,
        },
        {
          id: 5,
          classObj: claseTSO,
          hours: 1,
        },
      ],
    },
    {
      id: 2,
      day: "Martes",
      classes: [
        {
          id: 1,
          classObj: claseRDC,
          hours: 2,
        },
        {
          id: 2,
          classObj: claseABD,
          hours: 2,
        },
        {
          id: 3,
          classObj: claseTSO,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseLibre,
          hours: 1,
        },
        {
          id: 5,
          classObj: claseFIS,
          hours: 1,
        },
      ],
    },
    {
      id: 3,
      day: "Miércoles",
      classes: [
        {
          id: 1,
          classObj: claseG,
          hours: 2,
        },
        {
          id: 2,
          classObj: claseLibre,
          hours: 2,
        },
        {
          id: 3,
          classObj: claseFIS,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseLibre,
          hours: 1,
        },
        {
          id: 5,
          classObj: claseTSO,
          hours: 1,
        },
      ],
    },
    {
      id: 4,
      day: "Jueves",
      classes: [
        {
          id: 1,
          classObj: claseLibre,
          hours: 2,
        },
        {
          id: 2,
          classObj: claseABD,
          hours: 2,
        },
        {
          id: 3,
          classObj: claseTSO,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseLibre,
          hours: 2,
        },
      ],
    },
    {
      id: 5,
      day: "Viernes",
      classes: [
        {
          id: 1,
          classObj: claseG,
          hours: 1,
        },
        {
          id: 2,
          classObj: claseRDC,
          hours: 1,
        },
        {
          id: 3,
          classObj: claseABD,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseLA,
          hours: 1,
        },
        {
          id: 6,
          classObj: claseFIS,
          hours: 1,
        },
        {
          id: 7,
          classObj: claseLibre,
          hours: 2,
        },
      ],
    },
  ];
};
