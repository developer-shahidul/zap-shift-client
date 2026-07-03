import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendPercel = () => {
  const serviceCenters = useLoaderData();
  const regionsDublicate = serviceCenters.map((c) => c.region);
  // dublicate thakbe na , akta nam akbar oi ashbe
  const region = [...new Set(regionsDublicate)];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendPercel = (data) => {
    console.log(data);
  };
  return (
    <div className="px-27.95 py-20 my-40">
      <div>
        <h2 className="text-[56px] text-[#03373D] font-extrabold mb-12.5">
          Send A Parcel
        </h2>
        <h4 className="text-[28px] font-extrabold text-[#03373D]">
          Enter your parcel details
        </h4>

        {/* devider */}
        <div className="divider my-7.5"></div>

        <form onSubmit={handleSubmit(handleSendPercel)}>
          {/* percel type */}
          <div className="my-7.5 flex">
            <label className="level text-[16px] font-semibold mr-12.5 flex items-center">
              <input
                type="radio"
                {...register("percelType", {
                  required: "true",
                })}
                value="document"
                className="radio"
                defaultChecked
              />
              <span className="ml-[2.5px]">Document</span>
            </label>

            <label className="level text-[16px] font-semibold flex items-center">
              <input
                type="radio"
                {...register("percelType", {
                  required: "true",
                })}
                value="non-document"
                className="radio"
              />
              <span className="ml-[2.5px]"> Non-Document</span>
            </label>

            {errors.percelType?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* percel info : name , weight */}
          <div className="md:flex items-center gap-7.5 ">
            {/* Name */}
            <div className="w-full">
              <label className="text-sm font-medium text-[#0F172A]">
                Parcel Name
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                {...register("percelName", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium text-[#0F172A]">
                Parcel Weight
              </label>
              <input
                type="text"
                placeholder="Parcel Weight (KG)
"
                className="w-full mt-1  px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                {...register("percelWeight", {
                  required: true,
                })}
              />
            </div>

            {errors.percelName?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
            {errors.percelWeight?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* devider */}
          <div className="divider my-7.5"></div>

          {/* 2 column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12.5">
            {/* sender info */}
            <div className="flex flex-col gap-5">
              <h2 className="text-[18px] font-extrabold text-[#03373D]">
                Sender Details
              </h2>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("senderName", {
                    required: true,
                  })}
                />
              </div>{" "}
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Sender Email
                </label>
                <input
                  type="email"
                  placeholder="Sender Email"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  autoComplete="email"
                  {...register("senderEmail", {
                    required: true,
                  })}
                />
                {errors.senderEmail?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">email is required</p>
                )}
              </div>{" "}
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("address", {
                    required: true,
                  })}
                />
              </div>{" "}
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Sender Phone No
                </label>

                <input
                  type="number"
                  placeholder="Sender Phone No"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("senderPhoneNo", {
                    required: true,
                  })}
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Your District
                </label>

                <select
                  placeholder="Your District"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  defaultValue={"pckup a region"}
                  {...register("district", {
                    required: true,
                  })}
                >
                  {region.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Pickup Instruction{" "}
                </label>
                <textarea
                  type="text"
                  placeholder="Pickup Instruction"
                  className="w-full h-25 mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("pickupInstruction", {
                    required: true,
                  })}
                />
              </div>
            </div>
            {/* receiver info */}
            <div className="flex flex-col gap-5">
              <h2 className="text-[18px] font-extrabold text-[#03373D]">
                Receiver Details{" "}
              </h2>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("receiverName", {
                    required: true,
                  })}
                />
              </div>{" "}
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Reciver Email
                </label>
                <input
                  type="email"
                  placeholder="Reciver Email"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  autoComplete="email"
                  {...register("reciverEmail", {
                    required: true,
                  })}
                />
                {errors.reciverEmail?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">email is required</p>
                )}
              </div>{" "}
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Receiver Address"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("receiverAddress", {
                    required: true,
                  })}
                />
              </div>{" "}
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Receiver Phone No
                </label>

                <input
                  type="number"
                  placeholder="Receiver Phone No"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("receiverPhoneNo", {
                    required: true,
                  })}
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Receiver District
                </label>
                <select
                  placeholder="Reciver District"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("reciverDistrict", {
                    required: true,
                  })}
                  defaultValue={"pckup a region"}
                >
                  {region.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Delivery Instruction
                </label>
                <textarea
                  type="text"
                  placeholder="Delivery Instruction"
                  className="w-full h-25 mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("deliveryInstruction", {
                    required: true,
                  })}
                />
              </div>
            </div>{" "}
          </div>
          <input
            type="submit"
            value="Proceed to Confirm Booking"
            className="btn btn-Primary text-black bg-[#CAEB66] mt-10"
          />
        </form>
      </div>
    </div>
  );
};

export default SendPercel;
