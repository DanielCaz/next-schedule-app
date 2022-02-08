import Meta from "./Meta";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta title="Horarios 6° ISC" />
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">Horarios ISC</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link href="/grupo-a">
                  <a className="nav-link">Grupo A</a>
                </Link>
                <Link href="/grupo-b">
                  <a className="nav-link">Grupo B</a>
                </Link>
                <Link href="/mis-links">
                  <a className="nav-link">Mis Links</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Layout;
