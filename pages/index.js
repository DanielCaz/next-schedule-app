export default function Home() {
  return (
    <div className="container w-sm-50 py-3">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h4 className="mb-1">Bienvenides</h4>
          </div>
          <p className="mb-1">
            ¡Entra a un horario seleccionando uno de los grupos arriba y guarda
            el link en tus marcadores (bueno solo si quieres...)!
          </p>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">Creador de la página</h5>
          </div>
          <p className="mb-1">Jorge Daniel Cazarez Hernandez</p>
          <small className="text-muted">
            Puedes contactarme en <i>cazarez.jorge.prog2019@gmail.com</i>
          </small>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">Tecnologías utilizadas</h5>
          </div>
          <p className="mb-1">
            NextJS y Bootstrap para el front-end y Firebase para autenticación y
            como back-end
          </p>
          <small className="text-muted">
            Diseños basados en la documentación de Bootstrap
          </small>
        </li>
      </ul>
    </div>
  );
}
