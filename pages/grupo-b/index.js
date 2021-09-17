import app from "../../firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getSchedule } from "../../scheduleDataB";
import Schedule from "../../components/Schedule";

const grupoB = ({
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

  let docSnap = await getDoc(doc(db, "clases_b", "6WYVwrMbl0DuGofpzXuz"));
  const claseLengInt = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_b", "2LjqomVAeEXEr40TC1GI"));
  const claseSim = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_b", "T6CoLPIyFlDZzAlb1TEh"));
  const claseLengAut = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_b", "Vq6kTvVMqAWIXmkdyXtc"));
  const claseFund = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_b", "Mxpl7agOxHye9owzuCSL"));
  const claseWeb = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_b", "DPQIQXYgdB0IDRW8r2O0"));
  const claseArq = { id: docSnap.id, data: docSnap.data() };
  docSnap = await getDoc(doc(db, "clases_b", "8dSiteroGKc0X2oeONYK"));
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

export default grupoB;
