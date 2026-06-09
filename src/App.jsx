import Navbar from "./components/Navbar";
import Gempa from "./components/Gempa";
import Analisis from "./components/Analisis";
import MapGempa from "./components/MapGempa";
import { ToastContainer } from "react-toastify";
import SimulationSection from "./components/SimulationSection";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="bg-[#eef4fb] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 mb-3">
                Dashboard Monitoring Gempa Bumi Indonesia
              </p>

              <h1 className="text-6xl font-bold text-gray-800 leading-tight">
                SCTB Palu
              </h1>

              <p className="text-gray-600 mt-6 max-w-xl">
                Sistem monitoring gempa bumi dan analisis sosial masyarakat
                secara real-time untuk mitigasi bencana.
              </p>

              <div className="flex gap-4 mt-8">
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ● SISTEM AKTIF
                </div>

                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  ● LIVE MONITORING
                </div>
              </div>
            </div>

            {/* WARNING CARD */}
            <div className="bg-orange-100 p-6 rounded-3xl max-w-sm shadow-sm">
              <h2 className="text-orange-700 font-bold text-xl">
                Tetap Waspada!
              </h2>

              <p className="text-gray-700 mt-3">
                Pantau informasi gempa bumi terkini dan ikuti panduan mitigasi
                bencana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GEMPA */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <Gempa />
          </div>

          {/* MAP */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6">
            <MapGempa />
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* ANALISIS */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6">
            <Analisis />
          </div>

          {/* STATISTIK */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">📊 Statistik</h2>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-2xl">
                <p className="text-gray-500">Total Gempa</p>

                <h1 className="text-4xl font-bold text-red-600">12</h1>
              </div>

              <div className="bg-green-50 p-4 rounded-2xl">
                <p className="text-gray-500">Tidak Berpotensi Tsunami</p>

                <h1 className="text-4xl font-bold text-green-600">10</h1>
              </div>

              <div className="bg-yellow-50 p-4 rounded-2xl">
                <p className="text-gray-500">Status Monitoring</p>

                <h1 className="text-2xl font-bold text-yellow-600">AKTIF</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATION SECTION */}
      <SimulationSection />

      <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="light"/>
    </div>
  );
}

export default App;
