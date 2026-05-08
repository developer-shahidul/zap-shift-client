

const OurServices = () => {
    const ourServices =
        [
            {
                "id": 1,
                "title": "Express & Standard Delivery",
                "description": "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
                "icon": "📦",
                "highlight": false
            },
            {
                "id": 2,
                "title": "Nationwide Delivery",
                "description": "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
                "icon": "🚚",
                "highlight": true
            },
            {
                "id": 3,
                "title": "Fulfillment Solution",
                "description": "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
                "icon": "🏬",
                "highlight": false
            },
            {
                "id": 4,
                "title": "Cash on Home Delivery",
                "description": "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
                "icon": "💰",
                "highlight": false
            },
            {
                "id": 5,
                "title": "Corporate Service / Contract In Logistics",
                "description": "Customized corporate services which includes warehouse and inventory management support.",
                "icon": "🏢",
                "highlight": false
            },
            {
                "id": 6,
                "title": "Parcel Return",
                "description": "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
                "icon": "🔄",
                "highlight": false
            }
        ]


    return (
        <div className='p-24 bg-[#03373D] text-center'>
            <div className='md:w-2xl mx-auto text-center'>
                <h2 className='text-white text-[40px] font-extrabold'>Our Services</h2>

                <p className='text-[#DADADA] font-medium text-[16px]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-center auto-rows-fr" >
                {ourServices?.map((service) => (
                    <div key={service.id} className={`h-full py-8 px-6  rounded-3xl ${service.highlight ? "bg-[#CAEB66]" : "bg-white"}`}>
                        <div className="h-22 w-22 mb-4 mx-auto ">
                            <div className="content-center text-[40px] h-full w-full rounded-full bg-linear-to-t from-[#EEEDFC0] to-[#EEEDFC]">{service.icon}</div>
                        </div>

                        <h3 className="text-[#03373D] text-2xl font-bold mb-4">
                            {service.title}
                        </h3>

                        <p className="text-[#606060] font-medium text-[16px]">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;