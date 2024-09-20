import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import SchoolManagement from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/School Management/SchoolManagement.jsx";
import SchoolSelection from "./screens/BusManagement/SchoolSelection";
import AddRemoveBuses from "./screens/BusManagement/BusAddRemove";
import BusNumberSelection from "./screens/BusManagement/BusNumberSelection";
import BusMap from "./screens/BusManagement/BusMap";
import AssignDrivers from "./screens/BusManagement/AssignDrivers";
import BusManagementOptions from "./screens/BusManagement/BusManagementOptions";
// Route Management imports
import RouteManagementOptions from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Route Management/RouteManagementOptions";
import CreateRoute from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Route Management/CreateRoute";
import ModifyRoute from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Route Management/ModifyRoute";
import AssignBuses from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Route Management/AssignBuses";
import TrackRoute from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Route Management/TrackRoute";
import SchoolSelectionRoute from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Route Management/SchoolSelectionRoute"; // Import School Selection for Route Management
// Driver Management imports
import DriverSchoolSelection from "./screens/Driver management/DriverSchoolSelection";
import DriverManagementOptions from "./screens/Driver management/DriverManagementOptions";
import AddDriver from "./screens/Driver management/AddDriver";
import RemoveDriver from "./screens/Driver management/RemoveDriver";
import UpdateDriver from "./screens/Driver management/UpdateDriver";
import AssignDriver from "./screens/Driver management/AssignDriver";
import ViewDrivers from "./screens/Driver management/ViewDriver";
import TrackDriverPerformance from "./screens/Driver management/TrackDriverPerformance";
//Student parent management 
import EditParent from "./screens/Student Parent Management/EditParent";
import SchoolSelectionPage from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Student Parent Management/SchoolSelectionPage";
import StudentParentManagement from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Student Parent Management/StudentParentManagement";
import EditStudent from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Student Parent Management/EditStudent";
//Notification Management
import NotificationManagement from './screens/NotificationManagement/NotificationManagement';
import SchoolSelectionNotifications from './screens/NotificationManagement/SchoolSelectionNotifications';
import SingleSchoolNotifications from './screens/NotificationManagement/SingleSchoolNotifications';
import AllSchoolsNotifications from './screens/NotificationManagement/AllSchoolsNotifications';
import ExistingNotifications from './screens/NotificationManagement/ExistingNotifications'; // Add this import
//Payment Management
import {
  PaymentManagement,
  InvoiceGeneration,
  PaymentHistory,
  PendingPayments,
  PaymentGatewayIntegration,
  PaymentHistorySchoolSelection
} from './screens/PaymentManagement';
//Reports ANd Analytics
import ReportsDashboard from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Reports And Analytics/ReportsDashboard";
import SystemAnalytics from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Reports And Analytics/SystemAnalytics";
import BusRoutesReport from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Reports And Analytics/BusRoutesReport";
import StudentUsageReport from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Reports And Analytics/StudentUsageReport";
import DriverPerformanceReport from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Reports And Analytics/DriverPerformanceReport";
import ProfitManagementReport from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Reports And Analytics/ProfitManagementReport";
import MonthlySummaryReport from "C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src/screens/Reports And Analytics/MonthlySummaryReport";
//Admin management
import AdminDashboard from "./screens/Admin Management/AdminDashboard";
import DashboardOverview from "./screens/Admin Management/DashboardOverview";
import ReportsAndAnalytics from "./screens/Admin Management/ReportsAndAnalytics";
import AdminSettings from "./screens/Admin Management/AdminSettings";
import SystemCustomization from "./screens/Admin Management/SystemCustomization";
import AddAdmin from "./screens/Admin Management/AddAdmin";
import RemoveAdmin from "./screens/Admin Management/RemoveAdmin";
import Logout from "./screens/Admin Management/Logout";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Apply dark-mode class to the body tag based on theme
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/school-management" element={<SchoolManagement />} />
          <Route path="/bus-management" element={<SchoolSelection />} />
          <Route path="/bus-management/:schoolId" element={<BusManagementOptions />} />
          <Route path="/bus-management/:schoolId/add-remove" element={<AddRemoveBuses />} />
          <Route path="/bus-management/:schoolId/assign-drivers" element={<AssignDrivers />} />
          <Route path="/bus-management/bus-selection" element={<BusNumberSelection />} />
          <Route path="/bus-management/map/:busId" element={<BusMap />} />

          {/* Route Management Pages */}
          <Route path="/school-selection" element={<SchoolSelectionRoute />} />
          <Route path="/route-management/:schoolId" element={<RouteManagementOptions />} />
          <Route path="/route-management/:schoolId/create-route" element={<CreateRoute />} />
          <Route path="/route-management/:schoolId/modify-route" element={<ModifyRoute />} />
          <Route path="/route-management/:schoolId/assign-buses" element={<AssignBuses />} />
          <Route path="/route-management/:schoolId/track-route" element={<TrackRoute />} />

          {/* Driver Management Pages */}
          <Route path="/driver-management" element={<DriverSchoolSelection />} />
          <Route path="/driver-management/:schoolId" element={<DriverManagementOptions />} />
          <Route path="/driver-management/:schoolId/add-driver" element={<AddDriver />} />
          <Route path="/driver-management/:schoolId/remove-driver" element={<RemoveDriver />} />
          <Route path="/driver-management/:schoolId/update-driver" element={<UpdateDriver />} />
          <Route path="/driver-management/:schoolId/assign-driver" element={<AssignDriver />} />
          <Route path="/driver-management/:schoolId/view-drivers" element={<ViewDrivers />} />
          <Route path="/driver-management/:schoolId/track-performance" element={<TrackDriverPerformance />} />

         {/*Student Parent Management*/}
        <Route path="/spmschoolselection" element={<SchoolSelectionPage />} />
        <Route path="/student-parent-management/:schoolId" element={<StudentParentManagement />} />
        <Route path="/student-parent-management/edit-student/:studentName" element={<EditStudent />} />
        <Route path="/student-parent-management/edit-parent/:parentName" element={<EditParent />} />

         {/*Notification Management*/}
        <Route path="/notifications-management" element={<NotificationManagement />} />
        <Route path="/notifications/school-selection" element={<SchoolSelectionNotifications />} />
        <Route path="/notifications/single-school/:schoolId" element={<SingleSchoolNotifications />} />
        <Route path="/notifications/all-schools" element={<AllSchoolsNotifications />} />
        <Route path="/notifications/existing" element={<ExistingNotifications />} /> {/* Add this route */}

        {/* Payment Management Routes */}
          <Route path="/payment-management" element={<PaymentManagement />} />
        <Route path="/payment/invoice-generation" element={<InvoiceGeneration />} />
        <Route path="/payment/history" element={<PaymentHistory />} />
        <Route path="/payment/pending" element={<PendingPayments />} />
        <Route path="/payment/gateway-integration" element={<PaymentGatewayIntegration />} />
        <Route path="/payment/history/SS/:schoolId" element={<PaymentHistory />} /> {/* Dynamic route for school ID */}
        <Route path="/payment/history/SS" element={<PaymentHistorySchoolSelection />} /> {/* School selection route */}
        
        {/* Reports And Anlytics */}  
        <Route path="/reports" element={<ReportsDashboard />} />  {/* Main dashboard for reports */}
        <Route path="/reports/system-analytics" element={<SystemAnalytics />} />  {/* System analytics page */}
        <Route path="/reports/bus-routes" element={<BusRoutesReport />} />  {/* Bus routes report page */}
        <Route path="/reports/student-usage" element={<StudentUsageReport />} />  {/* Student usage report */}
        <Route path="/reports/driver-performance" element={<DriverPerformanceReport />} />  {/* Driver performance report */}
        <Route path="/reports/profit-management" element={<ProfitManagementReport />} />  {/* Profit management and analysis */}
        <Route path="/reports/monthly-summary" element={<MonthlySummaryReport />} />  {/* Monthly/Weekly summary report */}
        
         {/* Admin Management */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
        <Route path="/dashboard-overview" element={<DashboardOverview />} />
        <Route path="/reports-analytics" element={<ReportsAndAnalytics />} />
        <Route path="/admin-settings" element={<AdminSettings />} />
        <Route path="/system-customization" element={<SystemCustomization />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/remove-admin" element={<RemoveAdmin />} />
        <Route path="/logout" element={<Logout />} />
        
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
      >
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          alt="Toggle Theme"
        />
      </button>
    </Router>
  );
}

export default App;