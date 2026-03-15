import { memo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface UserData {
  month: string;
  users: number;
}

const data: UserData[] = [
  { month: "Jan", users: 17 },
  { month: "Feb", users: 12 },
  { month: "Mar", users: 31 },
  { month: "Apr", users: 26 },
  { month: "May", users: 14 }
];

const COLORS = ["#f8d442", "#ff6b6b", "#4dabf7", "#51cf66", "#845ef7"];

 function NewUsersPieChart() {
    
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h5 className="mb-3">New Users (Last Months)</h5>

      <ResponsiveContainer width="100%" height="100%" debounce={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="users"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={75}
            label={({ percent = 0 }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(NewUsersPieChart);

