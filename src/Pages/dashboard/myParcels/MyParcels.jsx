import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBoxOpen } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdPaid } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["MyParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handlePayment = async (parcel) => {
    // console.log(parcel);
    try {
      const paymentInfo = {
        parcelId: parcel._id,
        parcelName: parcel.parcelName,
        cost: parcel.cost,
        senderEmail: parcel.senderEmail,
      };

      const res = await axiosSecure.post(
        "/create-checkout-session",
        paymentInfo,
      );

      console.log(res.data);
      window.location.assign(res.data.url);
    } catch (error) {
      console.error("Payment error:", error);
      Swal.fire({
        title: "Payment Failed",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
    });
  };
  return (
    <div className="p-8 bg-white rounded-2xl">
      <h1 className="text-5xl font-extrabold text-[#03373D]">All Deliveries</h1>
      <div className="flex gap-6 py-10">
        <div className="flex items-center justify-center gap-4 p-6 bg-[#F5F5F5] rounded-2xl">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <FaBoxOpen className="text-2xl text-gray-700" />
          </div>
          <div className="w-40">
            <h4 className="mb-2 text-gray-700 text-sm font-medium">Total</h4>
            <h4 className="font-bold text-gray-800 text-4xl">
              {parcels.length}
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 p-6 bg-[#F5F5F5] rounded-2xl">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <TbTruckReturn className="text-2xl text-gray-700" />
          </div>
          <div className="w-40">
            <h4 className="mb-2 text-gray-700 text-sm font-medium">Return</h4>
            <h4 className="font-bold text-gray-800 text-4xl">
              {parcels.length}
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 p-6 bg-[#F5F5F5] rounded-2xl">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <MdPaid className="text-2xl text-gray-700" />
          </div>
          <div className="w-40">
            <h4 className="mb-2 text-gray-700 text-sm font-medium">
              Paid Return
            </h4>
            <h4 className="font-bold text-gray-800 text-4xl">
              {parcels.length}
            </h4>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>_id</th>
                <th>Store</th>
                <th>Recipient Info</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {parcels?.map((parcel) => (
                <tr key={parcel._id}>
                  <th>{parcel._id}</th>
                  <td>Shahidul store</td>
                  <td>
                    <p>{parcel.receiverName}</p>
                    <p>
                      {parcel.receiverAddress}, {parcel.receiverDistrict}, {}
                      {parcel.receiverRegion}
                    </p>
                    <p>{parcel.receiverPhoneNo}</p>
                  </td>
                  <td>
                    <p>COD tk {parcel.cost}.</p>
                    <p>Charge tk 00.</p>
                    <p>Discount tk 00.</p>
                  </td>
                  <td>
                    <p className="text-[#0AB010]">paid</p>
                  </td>
                  <td className="space-x-2.5">
                    <Link to={"/dashboard/payment-success"}>
                      <button
                        onClick={() => handlePayment(parcel)}
                        className="py-2 px-4 rounded-md bg-[#CAEB66] font-medium cursor-pointer"
                      >
                        Pay
                      </button>
                    </Link>

                    <Link to={`/dashboard/details/${parcel._id}`}>
                      <button className="py-2 px-4 rounded-md bg-[#94C6CB22] font-medium cursor-pointer">
                        View
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(parcel._id)}
                      className="py-2 px-4 rounded-md font-medium bg-[#E8333010] text-red-600 cursor-pointer "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
