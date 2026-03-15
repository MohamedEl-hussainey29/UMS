import { memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

interface VisitData {
  day: string;
  visits: number;
}

const data: VisitData[] = [
  { day: "Mon", visits: 40 },
  { day: "Tue", visits: 65 },
  { day: "Wed", visits: 30 },
  { day: "Thu", visits: 90 },
  { day: "Fri", visits: 55 },
  { day: "Sat", visits: 75 },
  { day: "Sun", visits: 50 }
];

 function LastVisitsChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h5>Last Visits</h5>

      <ResponsiveContainer width="100%" height="100%" debounce={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="visits"
            stroke="#f8d442"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(LastVisitsChart);