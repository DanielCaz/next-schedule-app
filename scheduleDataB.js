const claseLibre = {
  id: "1",
  data: {
    name: "Libre",
    meetingUrl: "",
  },
};

export const getSchedule = (
  claseLengInt,
  claseSim,
  claseLengAut,
  claseFund,
  claseWeb,
  claseArq,
  claseTaller
) => {
  return [
    {
      id: 1,
      day: "Lunes",
      classes: [
        {
          id: 1,
          classObj: claseLengInt,
          hours: 2,
        },
        {
          id: 2,
          classObj: claseFund,
          hours: 1,
        },
        {
          id: 3,
          classObj: claseArq,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseWeb,
          hours: 1,
        },
        {
          id: 5,
          classObj: claseLibre,
          hours: 2,
        },
      ],
    },
    {
      id: 2,
      day: "Martes",
      classes: [
        {
          id: 1,
          classObj: claseLengAut,
          hours: 2,
        },
        {
          id: 2,
          classObj: claseFund,
          hours: 2,
        },
        {
          id: 3,
          classObj: claseWeb,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseSim,
          hours: 2,
        },
      ],
    },
    {
      id: 3,
      day: "Miércoles",
      classes: [
        {
          id: 1,
          classObj: claseLengInt,
          hours: 2,
        },
        {
          id: 2,
          classObj: claseArq,
          hours: 1,
        },
        {
          id: 3,
          classObj: claseTaller,
          hours: 1,
        },
        {
          id: 4,
          classObj: claseWeb,
          hours: 2,
        },
        {
          id: 5,
          classObj: claseSim,
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
          classObj: claseLengAut,
          hours: 2,
        },
        {
          id: 2,
          classObj: claseArq,
          hours: 1,
        },
        {
          id: 3,
          classObj: claseTaller,
          hours: 2,
        },
        {
          id: 4,
          classObj: claseWeb,
          hours: 1,
        },
        {
          id: 5,
          classObj: claseSim,
          hours: 1,
        },
      ],
    },
    {
      id: 5,
      day: "Viernes",
      classes: [
        {
          id: 1,
          classObj: claseFund,
          hours: 1,
        },
        {
          id: 2,
          classObj: claseLengAut,
          hours: 1,
        },
        {
          id: 3,
          classObj: claseArq,
          hours: 2,
        },
        {
          id: 4,
          classObj: claseTaller,
          hours: 1,
        },
        {
          id: 5,
          classObj: claseSim,
          hours: 1,
        },
        {
          id: 6,
          classObj: claseLibre,
          hours: 1,
        },
      ],
    },
  ];
};
