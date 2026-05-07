import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Gempa() {
  const [gempa, setGempa] = useState(null);

  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    const fetchGempa = () => {
      fetch(
        "https://sctb-backend-brynjuan983-amxrusia.leapcell.dev/api/v1/gempa/latest",
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA GEMPA:", data);

          // cek apakah data baru
          if (gempa && gempa.DateTime !== data.DateTime) {
            toast.error(`Gempa Baru M ${data.Magnitude} - ${data.Wilayah}`, {
              position: "top-right",
            });
          }

          setGempa(data);

          const now = new Date();

          setLastUpdate(now.toLocaleTimeString());
        });
    };

    // fetch pertama
    fetchGempa();

    // polling tiap 15 detik
    const interval = setInterval(fetchGempa, 15000);

    return () => clearInterval(interval);
  }, [gempa]);

  if (!gempa) {
    return <p>Loading data gempa...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">🌍 Info Gempa Terkini</h2>

        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm animate-pulse">
          LIVE
        </span>
      </div>

      <div className="space-y-3">
        <div className="bg-gray-100 p-3 rounded-xl">
          <p className="font-semibold">Magnitude</p>

          <p>{gempa.Magnitude}</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-xl">
          <p className="font-semibold">Wilayah</p>

          <p>{gempa.Wilayah}</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-xl">
          <p className="font-semibold">Kedalaman</p>

          <p>{gempa.Kedalaman}</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-xl">
          <p className="font-semibold">Potensi</p>

          <p>{gempa.Potensi}</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Update terakhir: {lastUpdate}
      </p>
    </div>
  );
}

export default Gempa;
