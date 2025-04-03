import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import healthcareData from "../data";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [chartData] = useState(healthcareData);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Healthcare Dashboard</h2>

      {/* Line Chart for Revenue & ICU Admissions */}
      <div className="chart-container">
        <h3 className="chart-title">Revenue & ICU Admissions Trends</h3>
        <ResponsiveContainer width="100%" height={500}> 
          <LineChart data={chartData} margin={{ top: 20, right: 80, left: 90, bottom: 150 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="hospital" 
              angle={-30} 
              textAnchor="end" 
              height={130} 
              interval={0} 
              tick={{ fontSize: 12 }} 
            />
            <YAxis 
              yAxisId="left" 
              tickFormatter={(value) => `$${(value / 1000).toFixed(1)}K`} 
              label={{ 
                value: "Revenue ($)", 
                angle: -90, 
                position: "insideLeft", 
                dy: -5, 
                dx: -50, // Adjusted more left to prevent overlap
                style: { fontSize: 12 } 
              }} 
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              label={{ 
                value: "ICU Admissions", 
                angle: -90, 
                position: "insideRight", 
                dy: -10, 
                style: { fontSize: 14 } 
              }} 
            />
            <Tooltip />
            <Legend align="center" verticalAlign="top" wrapperStyle={{ fontSize: 14, paddingBottom: 20 }} />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} dot={{ r: 5 }} />
            <Line yAxisId="right" type="monotone" dataKey="icuAdmissions" stroke="#ff7300" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart for Emergency Cases & Surgeries */}
      <div className="chart-container">
        <h3 className="chart-title">Emergency Cases & Surgeries</h3>
        <ResponsiveContainer width="100%" height={520}> 
          <BarChart data={chartData} margin={{ top: 20, right: 90, left: 90, bottom: 150 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="hospital" 
              angle={-30} 
              textAnchor="end" 
              height={130} 
              interval={0} 
              tick={{ fontSize: 12 }} 
            />
            <YAxis 
              yAxisId="left"
              label={{ 
                value: "Cases", 
                angle: -90, 
                position: "insideLeft", 
                dy: -10, 
                style: { fontSize: 14 } 
              }} 
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              label={{ 
                value: "Surgeries", 
                angle: -90, 
                position: "insideRight", 
                dy: -10, 
                style: { fontSize: 14 } 
              }} 
            />
            <Tooltip />
            <Legend align="center" verticalAlign="top" wrapperStyle={{ fontSize: 14, paddingBottom: 20 }} />
            <Bar yAxisId="left" dataKey="emergencyCases" fill="#ffa500" barSize={40} />
            <Bar yAxisId="right" dataKey="surgeries" fill="#32cd32" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
