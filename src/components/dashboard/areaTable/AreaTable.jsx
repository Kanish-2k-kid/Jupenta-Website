// eslint-disable-next-line no-unused-vars
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Schools",
  "Buses",
  "Students",
  "Total Amount",
  "Revenue Generated",
  "Profit",
  "Badge",
];

const TABLE_DATA = [
  {
    id: 1,
    schools: "Sri Ramakrishna Mission",
    buses: 4,
    students: 184,
    totamount: 1196,
    revgen: 5980,
    profit: 2368,
    badge: "Non Attendance",
  },
  {
    id: 2,
    schools: "Adharsh Vishyalaya",
    buses: 51,
    students: 1876,
    totamount: 25499,
    revgen: 127245,
    profit: 62340,
    badge: "Attendance",
  },
  {
    id: 3,
    schools: "Amirta Vidhyalaya",
    buses: 36,
    students: 1836,
    totamount: 17964,
    revgen: 118953,
    profit: 55368,
    badge: "Attendance",
  },
  {
    id: 4,
    schools: "Kovai Vidhya Mandhir",
    buses: 2,
    students: 104,
    totamount: 998,
    revgen: 6986,
    profit: 2456,
    badge: "Non Attendance",
  },
  {
    id: 5,
    schools: "IPSC",
    buses: 14,
    students: 672,
    totamount: 686,
    revgen: 3430,
    profit: 1645,
    badge: "Non Attendance",
  },
  {
    id: 6,
    schools: "PalliKoodam",
    buses: 7,
    students: 336,
    totamount: 3493,
    revgen: 20958,
    profit: 10874,
    badge: "Attendance",
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.schools}</td>
                  <td>{dataItem.buses}</td>
                  <td>{dataItem.students}</td>
                  <td>${dataItem.totamount.toFixed(2)}</td>
                  <td>${dataItem.revgen.toFixed(2)}</td>
                  <td>${dataItem.profit.toFixed(2)}</td>
                  <td>{dataItem.badge}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
