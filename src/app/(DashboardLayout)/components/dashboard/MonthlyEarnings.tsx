import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Avatar, Fab } from "@mui/material";
import { IconArrowDownRight, IconCurrencyDollar } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const MonthlyEarnings = () => {
  // chart color
  const theme = useTheme();
  const secondary = "#5D87FF";
  const secondarylight = "#f5fcff";
  const errorlight = "#fdede8";

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      colors: [secondarylight],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
    },
  };
  const [min, max] = [3, 5];
  const seriescolumnchart: any = [
    {
      name: "",
      color: secondary,
      data: new Array(12)
        .fill("")
        .map(m => Math.floor(Math.random() * (max - min + 1) + min)),
    },
  ];

  return (
    <DashboardCard
      title='Rating trend'
      footer={
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type='area'
          height='120px'
        />
      }
    ></DashboardCard>
  );
};

export default MonthlyEarnings;
