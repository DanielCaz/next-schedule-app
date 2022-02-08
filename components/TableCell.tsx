const TableCell = ({
  hours,
  name,
  meetingUrl,
}: {
  hours: number;
  name: string;
  meetingUrl: string;
}) => {
  return (
    <td colSpan={hours}>
      {meetingUrl ? (
        <a
          className="text-decoration-none text-white"
          href={meetingUrl}
          target="_blank"
          rel="noreferrer"
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
