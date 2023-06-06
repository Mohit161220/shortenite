import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: 0,
    clicks: 5,
  },
  {
    day: 1,
    clicks: 50,
  },
  {
    day: 2,
    clicks: 15,
  },
  {
    day: 3,
    clicks: 20,
  },
  {
    day: 4,
    clicks: 0,
  },
  {
    day: 5,
    clicks: 10,
  },
  {
    day: 6,
    clicks: 10,
  },
  {
    day: 7,
    clicks: 2,
  },
  {
    day: 0,
    clicks: 5,
  },
  {
    day: 1,
    clicks: 50,
  },
  {
    day: 2,
    clicks: 15,
  },
  {
    day: 3,
    clicks: 20,
  },
  {
    day: 4,
    clicks: 0,
  },
  {
    day: 5,
    clicks: 10,
  },
  {
    day: 6,
    clicks: 10,
  },
  {
    day: 7,
    clicks: 2,
  },
  {
    day: 0,
    clicks: 5,
  },
  {
    day: 1,
    clicks: 50,
  },
  {
    day: 2,
    clicks: 15,
  },
  {
    day: 3,
    clicks: 20,
  },
  {
    day: 4,
    clicks: 0,
  },
  {
    day: 5,
    clicks: 10,
  },
  {
    day: 6,
    clicks: 10,
  },
  {
    day: 7,
    clicks: 2,
  },
];

const BarGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="clicks" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
