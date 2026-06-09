function SimulationSection() {

  const robloxLink =
    "https://ro.blox.com/Ebh5?af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D10279140405&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F83509859361916";

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            🎮 Simulasi Evakuasi Gempa
          </h2>

          <p className="text-gray-600 max-w-xl">
            Simulasi interaktif berbasis Roblox
            untuk melatih kesiapsiagaan masyarakat
            Kota Palu menghadapi bencana gempa bumi.
          </p>
        </div>

        <div className="text-center">

          <div className="text-6xl mb-4">
            🎮
          </div>

          <button
            onClick={() =>
              window.open(robloxLink, "_blank")
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            ▶ GO SIMULATION EVACUATION
          </button>

        </div>

      </div>

    </div>
  );
}

export default SimulationSection;