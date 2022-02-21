import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import Meta from "../../components/Meta";
import Schedule from "../../components/Schedule";
import app from "../../firebase";

const grupoB = ({ schedule }) => {
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
      <Meta title="Horario 6B ISC" />
      <Schedule schedule={schedule} caption="Horario 6A" headers={headers} />
    </>
  );
};
export const getServerSideProps = async () => {
  const db = getFirestore(app);

  const schedule = [];

  let docSnap = await getDoc(doc(db, "clases_b", "Monday"));
  let classes = [];
  let querySnapshot = await getDocs(
    collection(db, "clases_b", "Monday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_b", "Tuesday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_b", "Tuesday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_b", "Wednesday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_b", "Wednesday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_b", "Thursday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_b", "Thursday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_b", "Friday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_b", "Friday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  return {
    props: { schedule },
  };
};

export default grupoB;
