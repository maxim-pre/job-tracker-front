import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const TinyBarChart = ({ data }) => {
  const legendPayload = data.map(({ name, value }) => ({
    value: `${name}: ${value}`,
    type: "circle",
    color: "#8884d8",
  }));

  const legendStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginTop: "20px", // Add top margin
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" minPointSize={3} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TinyBarChart;
