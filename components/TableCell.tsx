const TableCell = ({
  hours,
  name,
  meetingUrl,
  location,
}: {
  hours: number;
  name: string;
  meetingUrl: string;
  location: String;
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
          <p className="m-0 text-info">{location}</p>
        </a>
      ) : (
        <span className="text-muted">{name}</span>
      )}
    </td>
  );
};

export default TableCell;
