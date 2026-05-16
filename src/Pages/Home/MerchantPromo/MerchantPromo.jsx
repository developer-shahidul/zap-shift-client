import marChantImg from "../../../assets/pic_icon/location-merchant.png";
const MerchantPromo = () => {
  return (
    <div>
      <section className="p-20 bg-[#063B3B] rounded-[30px] mt-20 overflow-hidden ">
        <div
          className="
          relative
        "
        >
          {/* CONTENT */}
          <div className=" z-10 max-w-167">
            <h1 className="text-white text-[40px] font-bold leading-tight">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>

            <p className="mt-6 text-gray-300 leading-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex items-center gap-5">
              <button
                className="
                rounded-full
                bg-lime-400
                px-8
                py-4
                font-semibold
                text-black
              "
              >
                Become a Merchant
              </button>

              <button
                className="
                rounded-full
                border
                border-lime-400
                px-8
                py-4
                font-semibold
                text-lime-400
              "
              >
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className=" 
            lg:w-172.75
            lg:h-75       
            absolute
            -right-25
            top-1/2
            -translate-y-1/2
            z-20
            "
          >
            <img
              src={marChantImg}
              alt="box"
              className="
               h-full
              w-full
            object-contain
          "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerchantPromo;
