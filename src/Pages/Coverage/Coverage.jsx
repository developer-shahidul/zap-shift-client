import { FiSearch } from "react-icons/fi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";

import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);

  // Latitude 51.505 → উপর-নিচে কতটুকু (উত্তরে)
  // Longitude -0.09 → ডানে-বামে কতটুকু (পশ্চিমে)

  const position = [24.8949, 91.8687]; // সিলেট 🇧🇩

  return (
    <div>
      <div className="mt-8 px-27.25 py-20 bg-white">
        <h3 className="text-[56px] font-extrabold text-[#03373D]">
          We are available in 64 districts
        </h3>
        <div className="my-12.5 flex items-center bg-[#CBD5E130] rounded-[50px] lg:w-142.75">
          <FiSearch className="h-6 w-6 ml-4 text-black"></FiSearch>
          <input
            className="px-5 py-4 outline-none border-transparent mr-auto text-[#00000050]"
            placeholder="Search here..."
            type="text"
          />
          <button className="px-8 py-4 text-black font-bold text-xl bg-[#CAEB66] rounded-[50px]  ">
            Search
          </button>
        </div>

        {/* map */}
        <div className="border-t border-dashed">
          <h4 className="my-12.5 text-[30px] font-extrabold text-[#03373D]">
            We deliver almost all over Bangladesh
          </h4>

          <div className="h-200 w-full ">
            <MapContainer
              center={position}
              zoom={8}
              className="h-full w-full rounded-4xl"
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution="&copy; contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {serviceCenters.map((center) => (
                <Marker
                  key={center.id}
                  position={[center.latitude, center.longitude]}
                >
                  <Popup>
                    <strong>{center.district}</strong> <br />
                    Service Area : {center.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
