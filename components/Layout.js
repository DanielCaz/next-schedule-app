import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta title="Horarios 5° ISC" />
      <header>
        <h1>Horarios ISC</h1>
      </header>
      {children}
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Layout;
