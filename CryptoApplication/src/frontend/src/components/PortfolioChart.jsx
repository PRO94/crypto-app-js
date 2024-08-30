import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../context/crypto-context";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
  const { assets } = useCrypto();

  const data = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: "USD",
        data: assets.map((asset) => asset.totalAmount.toFixed(2)),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 100, 86)",
          "rgb(255, 205, 156)",
          "rgb(255, 75, 200)",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "center",
        height: 400,
      }}
    >
      <Pie data={data}></Pie>
    </div>
  );
}
