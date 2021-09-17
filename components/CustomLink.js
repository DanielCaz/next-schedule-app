import { FaTimes } from "react-icons/fa";

const CustomLink = ({ name, url, extras, onDelete }) => {
  return (
    <li className="list-group-item d-flex flex-row">
      <div className="w-100">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
        <p>Extras: {extras}</p>
      </div>
      <FaTimes
        onClick={onDelete}
        style={{ cursor: "pointer" }}
        className="text-danger"
      />
    </li>
  );
};

export default CustomLink;
