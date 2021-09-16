import app from "../../firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const grupoA = ({ data }) => {
  return <div></div>;
};

export const getStaticProps = async () => {
  const db = getFirestore(app);
  const data = { content: [] };
  const querySnapshot = await getDocs(collection(db, "clases_a"));

  querySnapshot.forEach((doc) => {
    data.content.push({ id: doc.id, data: doc.data() });
  });

  return {
    props: {
      data,
    },
  };
};

export default grupoA;
