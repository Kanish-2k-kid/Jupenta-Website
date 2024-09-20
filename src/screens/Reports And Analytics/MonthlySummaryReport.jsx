import React, { useState, useEffect } from 'react';
import './MonthlySummaryReport.scss';

const MonthlySummaryReport = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMonthlyData(); // Fetching data from API
        setMonthlyData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching monthly summary data:", error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="monthly-summary-report">
      <h1>Monthly Summary Report</h1>
      <div className="report-container">
        {monthlyData.length ? (
          monthlyData.map((item, index) => (
            <div key={index} className="report-item">
              <h2>{item.month}</h2>
              <p>Total Students: {item.totalStudents}</p>
              <p>Total Buses: {item.totalBuses}</p>
              <p>Total Drivers: {item.totalDrivers}</p>
              <p>Total Routes: {item.totalRoutes}</p>
              <p>Revenue: ₹{item.revenue}</p>
            </div>
          ))
        ) : (
          <p>No data available for this month.</p>
        )}
      </div>
    </div>
  );
};

export default MonthlySummaryReport;
