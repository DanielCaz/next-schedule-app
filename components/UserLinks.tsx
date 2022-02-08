import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "../firebase";
import CustomLink from "./CustomLink";
import AddCustomLink from "./AddCustomLink";
import userLinksStyles from "../styles/UserLinks.module.scss";

const auth = getAuth(app);
const db = getFirestore(app);

const UserLinks = ({ onSignOut }) => {
  const [myLinks, setMyLinks] = useState([]);
  const [showAddLink, setShowAddLink] = useState(false);

  useEffect(() => {
    const getLinks = async () => {
      const linkArray = [];
      const querySnapshot = await getDocs(
        collection(db, `users/${auth.currentUser.uid}/customUrls`)
      );
      querySnapshot.forEach((doc) => {
        linkArray.push(doc.data());
      });

      setMyLinks(linkArray);
    };

    getLinks();
  }, []);

  const onAddLink = async (name, url, extras) => {
    const newObj = {
      id: "",
      linkName: name,
      linkUrl: url,
      linkExtras: extras,
    };
    try {
      const docRef = await addDoc(
        collection(db, `users/${auth.currentUser.uid}/customUrls`),
        newObj
      );
      newObj.id = docRef.id;
      await setDoc(
        doc(db, `users/${auth.currentUser.uid}/customUrls`, newObj.id),
        newObj
      );
      setMyLinks([...myLinks, newObj]);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const onDelete = async (id) => {
    setMyLinks(myLinks.filter((link) => link.id !== id));
    await deleteDoc(doc(db, `users/${auth.currentUser.uid}/customUrls`, id));
  };

  const signOutWithGoogle = async () => {
    await signOut(auth)
      .then(() => {
        onSignOut();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={userLinksStyles.container}>
      <h2>Mis Links</h2>
      <button
        className={`btn ${
          showAddLink ? "btn-warning" : "btn-primary"
        } w-50 align-self-end`}
        onClick={() => setShowAddLink(!showAddLink)}
      >
        {showAddLink ? "Cerrar" : "Agregar"}
      </button>
      {showAddLink && <AddCustomLink onAddLink={onAddLink} />}
      <ul className="list-group my-2">
        {myLinks.length > 0 ? (
          myLinks.map((link) => {
            return (
              <CustomLink
                key={link.id}
                name={link.linkName}
                url={link.linkUrl}
                extras={link.linkExtras}
                onDelete={() => onDelete(link.id)}
              />
            );
          })
        ) : (
          <li className="list-group-item">No tienes clases guardadas</li>
        )}
      </ul>
      <hr />
      <button className="btn btn-danger" onClick={signOutWithGoogle}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default UserLinks;
