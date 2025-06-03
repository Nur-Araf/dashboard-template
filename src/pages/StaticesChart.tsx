import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart for SaaS admin panel";

const chartData = [
  { date: "2024-04-01", activeUsers: 1200, newSignups: 150 },
  { date: "2024-04-02", activeUsers: 1100, newSignups: 180 },
  { date: "2024-04-03", activeUsers: 1300, newSignups: 120 },
  { date: "2024-04-04", activeUsers: 1400, newSignups: 260 },
  { date: "2024-04-05", activeUsers: 1500, newSignups: 290 },
  { date: "2024-04-06", activeUsers: 1600, newSignups: 340 },
  { date: "2024-04-07", activeUsers: 1450, newSignups: 180 },
  { date: "2024-04-08", activeUsers: 1700, newSignups: 320 },
  { date: "2024-04-09", activeUsers: 900, newSignups: 110 },
  { date: "2024-04-10", activeUsers: 1350, newSignups: 190 },
  { date: "2024-04-11", activeUsers: 1550, newSignups: 350 },
  { date: "2024-04-12", activeUsers: 1400, newSignups: 210 },
  { date: "2024-04-13", activeUsers: 1650, newSignups: 380 },
  { date: "2024-04-14", activeUsers: 1250, newSignups: 220 },
  { date: "2024-04-15", activeUsers: 1150, newSignups: 170 },
  { date: "2024-04-16", activeUsers: 1200, newSignups: 190 },
  { date: "2024-04-17", activeUsers: 1800, newSignups: 360 },
  { date: "2024-04-18", activeUsers: 1600, newSignups: 410 },
  { date: "2024-04-19", activeUsers: 1300, newSignups: 180 },
  { date: "2024-04-20", activeUsers: 1000, newSignups: 150 },
  { date: "2024-04-21", activeUsers: 1250, newSignups: 200 },
  { date: "2024-04-22", activeUsers: 1350, newSignups: 170 },
  { date: "2024-04-23", activeUsers: 1200, newSignups: 230 },
  { date: "2024-04-24", activeUsers: 1550, newSignups: 290 },
  { date: "2024-04-25", activeUsers: 1400, newSignups: 250 },
  { date: "2024-04-26", activeUsers: 950, newSignups: 130 },
  { date: "2024-04-27", activeUsers: 1650, newSignups: 420 },
  { date: "2024-04-28", activeUsers: 1100, newSignups: 180 },
  { date: "2024-04-29", activeUsers: 1450, newSignups: 240 },
  { date: "2024-04-30", activeUsers: 1700, newSignups: 380 },
  { date: "2024-05-01", activeUsers: 1250, newSignups: 220 },
  { date: "2024-05-02", activeUsers: 1400, newSignups: 310 },
  { date: "2024-05-03", activeUsers: 1300, newSignups: 190 },
  { date: "2024-05-04", activeUsers: 1600, newSignups: 420 },
  { date: "2024-05-05", activeUsers: 1750, newSignups: 390 },
  { date: "2024-05-06", activeUsers: 1800, newSignups: 520 },
  { date: "2024-05-07", activeUsers: 1650, newSignups: 300 },
  { date: "2024-05-08", activeUsers: 1200, newSignups: 210 },
  { date: "2024-05-09", activeUsers: 1300, newSignups: 180 },
  { date: "2024-05-10", activeUsers: 1400, newSignups: 330 },
  { date: "2024-05-11", activeUsers: 1500, newSignups: 270 },
  { date: "2024-05-12", activeUsers: 1250, newSignups: 240 },
  { date: "2024-05-13", activeUsers: 1200, newSignups: 160 },
  { date: "2024-05-14", activeUsers: 1700, newSignups: 490 },
  { date: "2024-05-15", activeUsers: 1750, newSignups: 380 },
  { date: "2024-05-16", activeUsers: 1550, newSignups: 400 },
  { date: "2024-05-17", activeUsers: 1800, newSignups: 420 },
  { date: "2024-05-18", activeUsers: 1450, newSignups: 350 },
  { date: "2024-05-19", activeUsers: 1300, newSignups: 180 },
  { date: "2024-05-20", activeUsers: 1200, newSignups: 230 },
  { date: "2024-05-21", activeUsers: 1000, newSignups: 140 },
  { date: "2024-05-22", activeUsers: 950, newSignups: 120 },
  { date: "2024-05-23", activeUsers: 1350, newSignups: 290 },
  { date: "2024-05-24", activeUsers: 1400, newSignups: 220 },
  { date: "2024-05-25", activeUsers: 1250, newSignups: 250 },
  { date: "2024-05-26", activeUsers: 1300, newSignups: 170 },
  { date: "2024-05-27", activeUsers: 1650, newSignups: 460 },
  { date: "2024-05-28", activeUsers: 1350, newSignups: 190 },
  { date: "2024-05-29", activeUsers: 900, newSignups: 130 },
  { date: "2024-05-30", activeUsers: 1500, newSignups: 280 },
  { date: "2024-05-31", activeUsers: 1200, newSignups: 230 },
  { date: "2024-06-01", activeUsers: 1200, newSignups: 200 },
  { date: "2024-06-02", activeUsers: 1700, newSignups: 410 },
  { date: "2024-06-03", activeUsers: 1100, newSignups: 160 },
  { date: "2024-06-04", activeUsers: 1650, newSignups: 380 },
  { date: "2024-06-05", activeUsers: 950, newSignups: 140 },
  { date: "2024-06-06", activeUsers: 1400, newSignups: 250 },
  { date: "2024-06-07", activeUsers: 1500, newSignups: 370 },
  { date: "2024-06-08", activeUsers: 1600, newSignups: 320 },
  { date: "2024-06-09", activeUsers: 1700, newSignups: 480 },
  { date: "2024-06-10", activeUsers: 1200, newSignups: 200 },
  { date: "2024-06-11", activeUsers: 1000, newSignups: 150 },
  { date: "2024-06-12", activeUsers: 1800, newSignups: 420 },
  { date: "2024-06-13", activeUsers: 950, newSignups: 130 },
  { date: "2024-06-14", activeUsers: 1650, newSignups: 380 },
  { date: "2024-06-15", activeUsers: 1500, newSignups: 350 },
  { date: "2024-06-16", activeUsers: 1550, newSignups: 310 },
  { date: "2024-06-17", activeUsers: 1750, newSignups: 520 },
  { date: "2024-06-18", activeUsers: 1100, newSignups: 170 },
  { date: "2024-06-19", activeUsers: 1450, newSignups: 290 },
  { date: "2024-06-20", activeUsers: 1600, newSignups: 450 },
  { date: "2024-06-21", activeUsers: 1200, newSignups: 210 },
  { date: "2024-06-22", activeUsers: 1500, newSignups: 270 },
  { date: "2024-06-23", activeUsers: 1750, newSignups: 530 },
  { date: "2024-06-24", activeUsers: 1100, newSignups: 180 },
  { date: "2024-06-25", activeUsers: 1200, newSignups: 190 },
  { date: "2024-06-26", activeUsers: 1650, newSignups: 380 },
  { date: "2024-06-27", activeUsers: 1700, newSignups: 490 },
  { date: "2024-06-28", activeUsers: 1200, newSignups: 200 },
  { date: "2024-06-29", activeUsers: 1100, newSignups: 160 },
  { date: "2024-06-30", activeUsers: 1650, newSignups: 400 },
];

const chartConfig = {
  users: {
    label: "Users",
  },
  activeUsers: {
    label: "Active Users",
    color: "var(--chart-1)", // Blue for active users
  },
  newSignups: {
    label: "New Signups",
    color: "var(--chart-2)", // Green for new signups
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>SaaS Metrics - Interactive</CardTitle>
          <CardDescription>
            Showing active users and new signups for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillActiveUsers" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-activeUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-activeUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillNewSignups" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-newSignups)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-newSignups)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="newSignups"
              type="natural"
              fill="url(#fillNewSignups)"
              stroke="var(--color-newSignups)"
              stackId="a"
            />
            <Area
              dataKey="activeUsers"
              type="natural"
              fill="url(#fillActiveUsers)"
              stroke="var(--color-activeUsers)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
