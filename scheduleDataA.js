const claseLibre = {
  id: "1",
  name: "Libre",
  meetingUrl: "",
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
      dia: "Lunes",
      clases: [
        {
          id: 1,
          clase: claseLengInt,
          horas: 2,
        },
        {
          id: 2,
          clase: claseArq,
          horas: 1,
        },
        {
          id: 3,
          clase: claseWeb,
          horas: 1,
        },
        {
          id: 4,
          clase: claseSim,
          horas: 2,
        },
        {
          id: 5,
          clase: claseLibre,
          horas: 1,
        },
      ],
    },
    {
      id: 2,
      dia: "Martes",
      clases: [
        {
          id: 1,
          clase: claseLengAut,
          horas: 2,
        },
        {
          id: 2,
          clase: claseArq,
          horas: 1,
        },
        {
          id: 3,
          clase: claseWeb,
          horas: 1,
        },
        {
          id: 4,
          clase: claseTaller,
          horas: 2,
        },
        {
          id: 5,
          clase: claseLibre,
          horas: 1,
        },
      ],
    },
    {
      id: 3,
      dia: "Miércoles",
      clases: [
        {
          id: 1,
          clase: claseLengInt,
          horas: 2,
        },
        {
          id: 2,
          clase: claseFund,
          horas: 1,
        },
        {
          id: 3,
          clase: claseArq,
          horas: 1,
        },
        {
          id: 4,
          clase: claseTaller,
          horas: 1,
        },
        {
          id: 5,
          clase: claseSim,
          horas: 1,
        },
        {
          id: 6,
          clase: claseLibre,
          horas: 1,
        },
      ],
    },
    {
      id: 4,
      dia: "Jueves",
      clases: [
        {
          id: 1,
          clase: claseLengAut,
          horas: 2,
        },
        {
          id: 2,
          clase: claseFund,
          horas: 1,
        },
        {
          id: 3,
          clase: claseArq,
          horas: 2,
        },
        {
          id: 4,
          clase: claseSim,
          horas: 1,
        },
        {
          id: 5,
          clase: claseWeb,
          horas: 1,
        },
      ],
    },
    {
      id: 5,
      dia: "Viernes",
      clases: [
        {
          id: 1,
          clase: claseLengInt,
          horas: 1,
        },
        {
          id: 2,
          clase: claseFund,
          horas: 2,
        },
        {
          id: 3,
          clase: claseTaller,
          horas: 1,
        },
        {
          id: 4,
          clase: claseSim,
          horas: 1,
        },
        {
          id: 5,
          clase: claseWeb,
          horas: 2,
        },
      ],
    },
  ];
};
