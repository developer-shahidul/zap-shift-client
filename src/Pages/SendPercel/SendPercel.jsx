import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const serviceCenters = useLoaderData();
  const regionsDublicate = serviceCenters.map((c) => c.region);
  // dublicate thakbe na , akta nam akbar oi ashbe
  const region = [...new Set(regionsDublicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegions = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    if (!region) return [];

    const regionByDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionByDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendPercel = (data) => {
    const isDocument = data.percelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const percelWeight = parseFloat(data.percelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (percelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharage = isSameDistrict ? 110 : 150;
        const extraWeight = percelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 80;
        cost = minCharage + extraCharge;
      }
    }
    data.cost = cost;

    console.log("cost", cost);
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charge ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed)
        // save the parcel info to the database

        axiosSecure
          .post("/parcels", data)
          .then((res) => console.log("after saving parcel ", res.data));

      // Swal.fire({
      //   title: "Success",
      //   text: "Your file has been successed.",
      //   icon: "success",
      // });
    });
  };
  return (
    <div className="md:px-27 py-20 my-20 rounded-4xl bg-white shadow">
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
                  defaultValue={user?.displayName}
                  {...register("senderName", {
                    required: true,
                  })}
                />
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Sender Email
                </label>
                <input
                  type="email"
                  placeholder="Sender Email"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  autoComplete="email"
                  defaultValue={user?.email}
                  {...register("senderEmail", {
                    required: true,
                  })}
                />
                {errors.senderEmail?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">email is required</p>
                )}
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("senderAddress", {
                    required: true,
                  })}
                />
              </div>
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
                  Your Region
                </label>

                <select
                  placeholder="Your  District"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  defaultValue={"Pick a region"}
                  {...register("senderRegion", {
                    required: true,
                  })}
                >
                  <option disabled={true} selected>
                    Pick a region
                  </option>
                  {region.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Your District
                </label>

                <select
                  placeholder="Your District"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  defaultValue={"pick a district"}
                  {...register("senderDistrict", {
                    required: true,
                  })}
                >
                  <option disabled={true} selected>
                    Pick a district
                  </option>
                  {districtByRegion(senderRegion).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
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
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Receiver Email
                </label>
                <input
                  type="email"
                  placeholder="Reciver Email"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  autoComplete="email"
                  {...register("receiverEmail", {
                    required: true,
                  })}
                />
                {errors.receiverEmail?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">email is required</p>
                )}
              </div>
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
              </div>
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
                  Receiver Region
                </label>
                <select
                  placeholder="Reciver District"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("receiverRegion", {
                    required: true,
                  })}
                  defaultValue={"pick a region"}
                >
                  <option disabled={true} selected>
                    Pick a region
                  </option>
                  {region.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-[#0F172A]">
                  Receiver District
                </label>
                <select
                  placeholder="Reciver District"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 border-gray-300"
                  {...register("receiverDistrict", {
                    required: true,
                  })}
                  defaultValue={"pick a district"}
                >
                  <option disabled={true} selected>
                    Pick a district
                  </option>
                  {districtByRegion(receiverRegions).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
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
