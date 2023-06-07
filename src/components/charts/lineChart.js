import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const TinyLineChart = ({ data, minYValue }) => {
  console.log(minYValue);
  const maxApplications = Math.max(...data.map((item) => item.applications));
  const maxYValue = Math.max(minYValue, maxApplications);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ left: -30 }}>
        <XAxis
          dataKey="day"
          padding={{ right: 10 }}
          tick={{
            fontSize: 10,
          }}
        />
        <YAxis domain={[0, maxYValue]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="applications"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TinyLineChart;
