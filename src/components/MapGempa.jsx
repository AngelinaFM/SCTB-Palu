import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

// FIX ICON MARKER
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapGempa() {
  // koordinat sementara Palu
  const position = [-0.8917, 119.8707];

  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            🗺️ Peta Sebaran Gempa
          </h2>

          <p className="text-gray-500 mt-1">
            Monitoring lokasi gempa bumi secara real-time
          </p>
        </div>

        <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
          ● LIVE MAP
        </div>
      </div>

      {/* MAP */}
      <div className="relative overflow-hidden rounded-3xl">
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={true}
          style={{
            height: "550px",
            width: "100%",
          }}
        >
          {/* TILE */}
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* MARKER */}
          <Marker position={position} icon={redIcon}>
            <Popup>
              <div className="space-y-2">
                <h2 className="font-bold text-lg">Gempa Palu</h2>

                <p>Magnitude: 4.3</p>

                <p>Kedalaman: 10 km</p>

                <p className="text-green-600 font-semibold">
                  Tidak berpotensi tsunami
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>

        {/* FLOATING CARD */}
        <div className="absolute top-6 right-6 bg-white p-5 rounded-3xl shadow-xl w-80 z-[1000]">
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full inline-block text-sm font-semibold">
            Tidak Berpotensi Tsunami
          </div>

          <p className="text-gray-500 mt-4">7 Mei 2026 - 11:25 WIB</p>

          <h1 className="text-2xl font-bold mt-2 leading-snug">
            Pusat gempa berada di laut 128 km barat laut Ternate
          </h1>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Magnitude</span>

              <span className="font-bold text-red-600">4.3</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Kedalaman</span>

              <span className="font-bold">10 km</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Lokasi</span>

              <span className="font-bold">Ternate</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-blue-700 hover:bg-blue-800 transition text-white py-3 rounded-2xl font-semibold">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default MapGempa;
