import TableCell from "./TableCell";
import { classesType, classType } from "../CustomTypes";

const TableRow = ({
  dayClasses,
  dayName,
}: {
  dayClasses: classesType[];
  dayName: string;
}) => {
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
            location={dayClass.location}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
