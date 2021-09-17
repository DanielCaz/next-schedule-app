import TableCell from "../components/TableCell";

const TableRow = ({ dayClasses, dayName }) => {
  return (
    <tr>
      <th scope="row">{dayName}</th>
      {dayClasses.map((dayClass) => {
        return (
          <TableCell
            key={dayClass.id}
            hours={dayClass.hours}
            name={dayClass.classObj.data.name}
            meetingUrl={dayClass.classObj.data.meetingUrl}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
