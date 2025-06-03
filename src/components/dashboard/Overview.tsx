import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 40000 },
  { month: "Feb", revenue: 30000 },
  { month: "Mar", revenue: 50000 },
  { month: "Apr", revenue: 45000 },
  { month: "May", revenue: 60000 },
  { month: "Jun", revenue: 55000 },
  { month: "Jul", revenue: 62000 },
  { month: "Aug", revenue: 65000 },
  { month: "Sep", revenue: 68000 },
  { month: "Oct", revenue: 70000 },
  { month: "Nov", revenue: 72000 },
  { month: "Dec", revenue: 75000 },
];

const Overview = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={revenueData}
        margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "4px",
            color: "hsl(var(--foreground))",
          }}
          itemStyle={{ color: "hsl(var(--foreground))" }}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fill="url(#colorRevenue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Overview;
