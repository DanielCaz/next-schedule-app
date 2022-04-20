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
  const getCells = () => {
    const cells = [];
    for (let i = 0; i < hours; i++) {
      cells.push(
        <td key={i}>
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
    }
    return cells;
  };

  return <>{getCells()}</>;
};

export default TableCell;
