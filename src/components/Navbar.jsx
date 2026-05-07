function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              BMKG
            </div>

            <div>
              <h1 className="font-bold text-gray-800 leading-tight">
                BADAN METEOROLOGI,
                <br />
                KLIMATOLOGI, DAN GEOFISIKA
              </h1>
            </div>

          </div>

          {/* MENU */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">

            <a href="#" className="text-blue-600">
              Beranda
            </a>

            <a href="#">
              Cuaca
            </a>

            <a href="#">
              Iklim
            </a>

            <a href="#">
              Gempa Bumi
            </a>

            <a href="#">
              Geofisika
            </a>

          </div>

          {/* BUTTON */}
          <button className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition">
            Contact Center 196
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;