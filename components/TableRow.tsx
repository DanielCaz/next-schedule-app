import TableCell from "./TableCell";
import { ClassType } from "../CustomTypes";

const TableRow = ({
  dayClasses,
  dayName,
}: {
  dayClasses: {
    id: number;
    classObj: ClassType;
    hours: number;
  }[];
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
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
