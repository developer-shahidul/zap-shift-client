import { Link } from "react-router";
import { FaTimesCircle, FaArrowLeft, FaHome } from "react-icons/fa";

const PaymentCancelled = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-6">
          <FaTimesCircle className="text-7xl text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#03373D] mb-4">
          Payment Cancelled
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">
          Your payment was cancelled. No payment has been completed for this
          parcel.
        </p>

        {/* Status */}
        <div className="bg-red-50 rounded-2xl p-5 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Payment Status</span>

            <span className="font-semibold text-red-500">Cancelled</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard/myParcels"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#CAEB66] text-[#03373D] font-semibold hover:bg-[#b9dc55] transition"
          >
            <FaArrowLeft />
            Back to My Parcels
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            <FaHome />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
