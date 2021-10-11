import app from "../../firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getSchedule } from "../../scheduleDataA";
import Schedule from "../../components/Schedule";
import Meta from "../../components/Meta";

const grupoA = ({
  claseLengInt,
  claseSim,
  claseLengAut,
  claseFund,
  claseWeb,
  claseArq,
  claseTaller,
  claseTutorias,
}) => {
  const schedule = getSchedule(
    claseLengInt,
    claseSim,
    claseLengAut,
    claseFund,
    claseWeb,
    claseArq,
    claseTaller,
    claseTutorias
  );

  const headers = [
    {
      id: 1,
      text: "7:00",
    },
    {
      id: 2,
      text: "8:00",
    },
    {
      id: 3,
      text: "9:00",
    },
    {
      id: 4,
      text: "10:00",
    },
    {
      id: 5,
      text: "11:00",
    },
    {
      id: 6,
      text: "12:00",
    },
    {
      id: 7,
      text: "13:00",
    },
    {
      id: 8,
      text: "14:00",
    },
  ];

  return (
    <>
      <Meta title="Horario 5A ISC" />
      <Schedule schedule={schedule} caption="Horario 5A" headers={headers} />
    </>
  );
};

export const getStaticProps = async () => {
  const db = getFirestore(app);

  let docSnap = await getDoc(doc(db, "clases_a", "1ynnCIkZcJNZGckGLt61"));
  const claseLengInt = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "CZH2RkgHx4hVvZvKs6OS"));
  const claseSim = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "HgD1lbsha4mHQqWvhB1K"));
  const claseLengAut = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "hbIdsO5gAj5IHFtEb2pT"));
  const claseFund = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "t6TdDwuPwCjpKSJr4F7E"));
  const claseWeb = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "uGO3wyDBrQvWebzG3Yk8"));
  const claseArq = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "uKBgIWSvkKiMEeVQ6Iln"));
  const claseTaller = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "loiNNO0rW0x5lczC8ki7"));
  const claseTutorias = { id: docSnap.id, data: docSnap.data() };

  return {
    props: {
      claseLengInt,
      claseSim,
      claseLengAut,
      claseFund,
      claseWeb,
      claseArq,
      claseTaller,
      claseTutorias,
    },
  };
};

export default grupoA;
