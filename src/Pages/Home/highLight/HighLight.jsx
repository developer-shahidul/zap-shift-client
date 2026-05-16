import liveTracking from "../../../assets/pic_icon/live-tracking.png";
import safeDelibari from "../../../assets/pic_icon/safe-delivery.png";

const HighLight = () => {
  return (
    <div className="py-20  border-t border-b border-dashed space-y-6">
      <div className="p-8 rounded-3xl  bg-white/70 flex  shadow-2xl items-center ">
        <div className="w-32 md:w-40 lg:w-50 h-32 md:h-40 lg:h-50  mr-12">
          <img
            className="h-full w-full object-contain"
            src={liveTracking}
            alt=""
          />
        </div>
        <div className="border-r border-dashed h-37.5 mr-12"></div>
        <div>
          <h4 className="text-[#03373D] font-extrabold text-2xl">
            Live Parcel Tracking
          </h4>
          <p className="text-[16px] font-medium text-[#606060]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="p-8 rounded-3xl  bg-white/70 flex  shadow-2xl items-center ">
        <div className="w-32 md:w-40 lg:w-50 h-32 md:h-40 lg:h-50  mr-12">
          <img
            className="h-full w-full object-contain"
            src={safeDelibari}
            alt=""
          />
        </div>
        <div className="border-r border-dashed h-37.5 mr-12"></div>
        <div>
          <h4 className="text-[#03373D] font-extrabold text-2xl">
            100% Safe Delivery
          </h4>
          <p className="text-[16px] font-medium text-[#606060]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>{" "}
      <div className="p-8 rounded-3xl  bg-white/70 flex  shadow-2xl items-center ">
        <div className="w-32 md:w-40 lg:w-50 h-32 md:h-40 lg:h-50  mr-12">
          <img
            className="h-full w-full object-contain"
            src={safeDelibari}
            alt=""
          />
        </div>
        <div className="border-r border-dashed h-37.5 mr-12"></div>
        <div>
          <h4 className="text-[#03373D] font-extrabold text-2xl">
            24/7 Call Center Support
          </h4>
          <p className="text-[16px] font-medium text-[#606060]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighLight;
