import { useLoaderData } from "react-router";

const Details = () => {
  const parcel = useLoaderData();

  return (
    <div className="p-8 bg-white rounded-2xl">
      <h1 className="text-5xl font-extrabold text-[#03373D] my-8">
        Parcel Details
      </h1>
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div className="p-6 bg-[#F5F5F5]">
          <h4 className="font-bold text-gray-800 text-3xl mb-3">Sender Info</h4>
          <div className="flex gap-3">
            <div>
              <p className="text-[#37415150] text-xl">Name </p>
              <p className="text-[#37415150] text-xl">Phone</p>
              <p className="text-[#37415150] text-xl">Email</p>
              <p className="text-[#37415150] text-xl">Region</p>
              <p className="text-[#37415150] text-xl">Address</p>
            </div>
            <div>
              <p className="text-gray-700 text-xl">{parcel.senderName}</p>
              <p className="text-gray-700 text-xl">{parcel.senderPhoneNo}</p>
              <p className="text-gray-700 text-xl">{parcel.senderEmail}</p>
              <p className="text-gray-700 text-xl">{parcel.senderRegion}</p>
              <p className="text-gray-700 text-xl">{parcel.senderAddress}</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#F5F5F5]">
          <h4 className="font-bold text-gray-800 text-3xl mb-3">
            Reciver Info
          </h4>
          <div className="flex gap-3">
            <div>
              <p className="text-[#37415150] text-xl">Name </p>
              <p className="text-[#37415150] text-xl">Phone</p>
              <p className="text-[#37415150] text-xl">Email</p>
              <p className="text-[#37415150] text-xl">Region</p>
              <p className="text-[#37415150] text-xl">Address</p>
            </div>
            <div>
              <p className="text-gray-700 text-xl">{parcel.receiverName}</p>
              <p className="text-gray-700 text-xl">{parcel.receiverPhoneNo}</p>
              <p className="text-gray-700 text-xl">{parcel.receiverEmail}</p>
              <p className="text-gray-700 text-xl">{parcel.receiverRegion}</p>
              <p className="text-gray-700 text-xl">{parcel.receiverAddress}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#F5F5F5]">
        <h4 className="font-bold text-gray-800 text-3xl mb-3">
          Parcel details
        </h4>
        <div className="flex gap-3">
          <div>
            <p className="text-[#37415150] text-xl">Title </p>
            <p className="text-[#37415150] text-xl">Type</p>
            <p className="text-[#37415150] text-xl">Weight</p>
            <p className="text-[#37415150] text-xl">Charge</p>
            <p className="text-[#37415150] text-xl">Status</p>
            <p className="text-[#37415150] text-xl">Pickup Instruction</p>
            <p className="text-[#37415150] text-xl">Delivery Instruction</p>
            <p className="text-[#37415150] text-xl">Tracking Number</p>
            <p className="text-[#37415150] text-xl">Pickup OTP</p>
            <p className="text-[#37415150] text-xl">Delivery OTP</p>
          </div>
          <div>
            <p className="text-gray-700 text-xl">{parcel.percelType}</p>
            <p className="text-gray-700 text-xl">{parcel.percelName}</p>
            <p className="text-gray-700 text-xl">{parcel.percelWeight} kg</p>
            <p className="text-gray-700 text-xl">Tk {parcel.cost}</p>
            <p className="text-gray-700 text-xl">pending</p>
            <p className="text-gray-700 text-xl">N/A</p>
            <p className="text-gray-700 text-xl">N/A</p>
            <p className="text-gray-700 text-xl">25820</p>
            <p className="text-gray-700 text-xl">6345</p>
            <p className="text-gray-700 text-xl">5555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
