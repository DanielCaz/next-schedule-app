import app from "../../firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getSchedule } from "../../scheduleDataA";
import Schedule from "../../components/Schedule";
import Meta from "../../components/Meta";

const grupoA = ({
  claseABD,
  claseFIS,
  claseG,
  claseLA,
  claseRDC,
  claseTSO,
}) => {
  const schedule = getSchedule(
    claseABD,
    claseFIS,
    claseG,
    claseLA,
    claseRDC,
    claseTSO
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
  ];

  return (
    <>
      <Meta title="Horario 6A ISC" />
      <Schedule schedule={schedule} caption="Horario 6A" headers={headers} />
    </>
  );
};

export const getStaticProps = async () => {
  const db = getFirestore(app);

  let docSnap = await getDoc(doc(db, "clases_a", "claseABD"));
  const claseABD = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "claseFIS"));
  const claseFIS = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "claseG"));
  const claseG = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "claseLA"));
  const claseLA = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "claseRDC"));
  const claseRDC = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_a", "claseTSO"));
  const claseTSO = { id: docSnap.id, data: docSnap.data() };

  return {
    props: {
      claseABD,
      claseFIS,
      claseG,
      claseLA,
      claseRDC,
      claseTSO,
    },
  };
};

export default grupoA;
