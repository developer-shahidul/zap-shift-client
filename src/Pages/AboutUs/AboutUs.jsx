import { useState } from "react";
import { useLoaderData } from "react-router";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutTabsData = useLoaderData();
  //   console.log(aboutTabsData);
  return (
    <div className="px-27 py-20 rounded-4xl">
      <div className="w-157.25 mb-12.5">
        <h2 className="text-[56px] font-extrabold text-[#03373D] mb-4">
          About Us
        </h2>
        <p className="text-[16px] text-[#606060]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div>
        <div className="my-12.5">
          {aboutTabsData.map((data, index) => (
            <button
              onClick={() => setActiveIndex(index)}
              key={data.id}
              className={`mr-12.5 ${activeIndex === index ? "font-bold border-b-2 text-[#03373D] " : "text-[#00000050]"}`}
            >
              {data.title}
            </button>
          ))}
        </div>

        {/* content */}
        <p className="text-gray-600 leading-8 text-lg">
          {aboutTabsData[activeIndex].content}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
