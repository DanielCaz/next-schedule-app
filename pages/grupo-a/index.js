import app from "../../firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const grupoA = ({
  claseLengInt,
  claseSim,
  claseLengAut,
  claseFund,
  claseWeb,
  claseArq,
  claseTaller,
}) => {
  const claseLibre = {
    id: "1",
    name: "Libre",
    meetingUrl: "",
  };
  const datosA = [
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
  return <div></div>;
};

export const getStaticProps = async () => {
  const db = getFirestore(app);

  let docSnap = await getDoc(doc(db, "clases_a/1ynnCIkZcJNZGckGLt61"));
  const claseLengInt = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a/CZH2RkgHx4hVvZvKs6OS"));
  const claseSim = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a/HgD1lbsha4mHQqWvhB1K"));
  const claseLengAut = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a/hbIdsO5gAj5IHFtEb2pT"));
  const claseFund = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a/t6TdDwuPwCjpKSJr4F7E"));
  const claseWeb = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a/uGO3wyDBrQvWebzG3Yk8"));
  const claseArq = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a/uKBgIWSvkKiMEeVQ6Iln"));
  const claseTaller = { id: docSnap.id, data: docSnap.data() };

  return {
    props: {
      claseLengInt,
      claseSim,
      claseLengAut,
      claseFund,
      claseWeb,
      claseArq,
      claseTaller,
    },
  };
};

export default grupoA;
