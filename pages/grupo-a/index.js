import app from "../../firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getSchedule } from "../../scheduleDataA";
import Schedule from "../../components/Schedule";

const grupoA = ({
  claseLengInt,
  claseSim,
  claseLengAut,
  claseFund,
  claseWeb,
  claseArq,
  claseTaller,
}) => {
  const schedule = getSchedule(
    claseLengInt,
    claseSim,
    claseLengAut,
    claseFund,
    claseWeb,
    claseArq,
    claseTaller
  );

  return (
    <>
      <Schedule schedule={schedule} />
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
