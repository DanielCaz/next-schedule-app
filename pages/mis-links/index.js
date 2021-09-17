import { useEffect, useState } from "react";
import app from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserLinks from "../../components/UserLinks";
import LoginPage from "../../components/LoginPage";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const misLinks = () => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [signedIn, setSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const addUser = async (user) => {
    try {
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
      });
    } catch (err) {
      console.log("Error adding document: ", err);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          addUser(user);
          setSignedIn(true);
        }
        setIsLoading(false);
      });
    };
    checkAuth();
  }, []);

  const onSignIn = () => {
    setSignedIn(true);
  };

  const onSignOut = () => {
    setSignedIn(false);
  };

  return (
    <div className="d-flex justify-content-center">
      {!isLoading &&
        (signedIn ? (
          <UserLinks onSignOut={onSignOut} />
        ) : (
          <LoginPage onSignIn={onSignIn} />
        ))}
    </div>
  );
};

export default misLinks;
