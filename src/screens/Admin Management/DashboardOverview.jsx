import { AreaCards, AreaCharts, AreaTable, } from "../../components";
const DashboardOverview = () => {
  return (
    <div className="content-area">
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default DashboardOverview;
