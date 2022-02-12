import app from "../../firebase";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";
import Schedule from "../../components/Schedule";
import Meta from "../../components/Meta";

const grupoA = ({ schedule }) => {
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

export const getServerSideProps = async () => {
  const db = getFirestore(app);

  const schedule = [];

  let docSnap = await getDoc(doc(db, "clases_a", "Monday"));
  let classes = [];
  let querySnapshot = await getDocs(
    collection(db, "clases_a", "Monday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_a", "Tuesday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_a", "Tuesday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_a", "Wednesday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_a", "Wednesday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_a", "Thursday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_a", "Thursday", "classes")
  );
  querySnapshot.forEach((doc) => {
    classes.push({ ...doc.data(), id: doc.id });
  });
  schedule.push({
    id: docSnap.id,
    day: docSnap.data().day,
    classes: classes,
  });

  docSnap = await getDoc(doc(db, "clases_a", "Friday"));
  classes = [];
  querySnapshot = await getDocs(
    collection(db, "clases_a", "Friday", "classes")
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

export default grupoA;
