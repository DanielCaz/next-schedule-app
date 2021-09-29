import TableRow from "../components/TableRow";

const Schedule = ({ schedule, caption }) => {
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-bordered">
        <caption className="bg-info text-dark w-25 px-2">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Día/Hora</th>
            <th scope="col">7:00</th>
            <th scope="col">8:00</th>
            <th scope="col">9:00</th>
            <th scope="col">10:00</th>
            <th scope="col">11:00</th>
            <th scope="col">12:00</th>
            <th scope="col">13:00</th>
            <th scope="col">14:00</th>
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
