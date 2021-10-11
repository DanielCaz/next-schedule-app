import TableRow from "../components/TableRow";

const Schedule = ({ schedule, caption, headers }) => {
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-bordered">
        <caption className="bg-info text-dark w-25 px-2">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Día/Hora</th>
            {headers.map((header) => {
              return (
                <th key={header.id} scope="col">
                  {header.text}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {schedule.map((dayInfo) => {
            return (
              <TableRow
                key={dayInfo.id}
                dayName={dayInfo.day}
                dayClasses={dayInfo.classes}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
