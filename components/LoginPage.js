import app from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = ({ onSignIn }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        onSignIn();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signin bg-white m-4 p-3 d-flex flex-column w-75">
      <h2>Mis Links</h2>
      <p>
        ¡Inicia sesión para para guardar tus propios links para fácil acceso!
      </p>
      <button className={"btn btn-primary"} onClick={signInWithGoogle}>
        Iniciar Sesión
      </button>
    </div>
  );
};

export default LoginPage;
