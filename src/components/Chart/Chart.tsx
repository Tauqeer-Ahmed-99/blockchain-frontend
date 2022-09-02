import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

type ChartProps = {
  type: "Balance" | "Mining" | "Spendings" | "Gains";
  chartData: any[];
  labels: string[];
};

const Chart = ({ type, chartData, labels }: ChartProps) => {
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: type,
        lineTension: 0.4,
        grid: false,
        data: chartData,
        borderColor: "#4a6aff",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "rgba(77, 202, 255, 3)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          return gradient;
        },
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default Chart;
