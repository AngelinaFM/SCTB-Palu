import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function Analisis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://sctb-backend-brynjuan983-amxrusia.leapcell.dev/api/v1/statistics/keywords",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const chartData = {
    labels: data.map((item) => item.KataKunci),

    datasets: [
      {
        label: "Frekuensi Kebutuhan",
        data: data.map((item) => item.Frekuensi),
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📊 Analisis Sosial Masyarakat</h2>

      <Bar data={chartData} />

      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded-xl">
            <p className="font-semibold">{item.KataKunci}</p>

            <p>Frekuensi: {item.Frekuensi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analisis;
