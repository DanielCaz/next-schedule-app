import { useState } from "react";

const AddCustomLink = ({ onAddLink }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [extras, setExtras] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAddLink(name, url, extras);

    setName("");
    setUrl("");
    setExtras("");
  };

  return (
    <div className="addLinkForm p-3 my-3">
      <h3>Agregar Link</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInputName" className="form-label">
            Nombre
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleFormControlInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInputUrl" className="form-label">
            URL
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleFormControlInputUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInputExtras" className="form-label">
            Extras
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInputExtras"
            value={extras}
            onChange={(e) => setExtras(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="btn btn-primary w-100"
            type="submit"
            value="Agregar"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCustomLink;
