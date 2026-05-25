const services = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    description:
      "Schedule parcel pickup and doorstep delivery with fast and reliable service.",
    icon: "📦",
  },
  {
    id: 2,
    title: "Cash On Delivery",
    description:
      "Collect payment securely from customers at the time of delivery.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Delivery Hub",
    description:
      "Manage and track shipments efficiently through our smart delivery hubs.",
    icon: "🚚",
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    description:
      "Business delivery solutions tailored for SMEs and corporate companies.",
    icon: "🏢",
  },
];
const HowItWork = () => {
  return (
    <div className="my-25 ">
      <h2 className="text-3xl font-extrabold text-[#03373D] mb-8">
        How It Works
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services?.map((service) => (
          <div
            key={service.id}
            className="p-8 text-[#03373D] bg-[rgba(255,255,255,0.7)] shadow-2xl "
          >
            <div className="mb-6 h-14 w-14 text-6xl">{service.icon}</div>
            <div>
              <h3 className="mb-4 text-xl font-bold text ">{service.title}</h3>
              <p className="font-medium text-[16px] text-[#606060]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
