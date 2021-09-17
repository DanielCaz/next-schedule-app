const TableCell = ({ hours, name, meetingUrl }) => {
  return (
    <td colSpan={hours}>
      {meetingUrl ? (
        <a
          className="text-decoration-none text-white"
          href={meetingUrl}
          target="_blank"
        >
          {name}
        </a>
      ) : (
        <span style={{ color: "gray" }}>{name}</span>
      )}
    </td>
  );
};

export default TableCell;
