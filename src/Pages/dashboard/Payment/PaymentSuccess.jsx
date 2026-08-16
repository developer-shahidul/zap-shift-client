import { Link } from "react-router";
import { FaCheckCircle, FaArrowRight, FaHome } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-7xl text-[#0AB010]" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#03373D] mb-4">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">
          Your payment has been successfully completed. Your parcel is now ready
          for the next step.
        </p>

        {/* Payment Status */}
        <div className="bg-[#F5F9F9] rounded-2xl p-5 mb-8">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
            <span className="text-gray-600">Payment Status</span>
            <span className="font-semibold text-[#0AB010]">Paid</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Transaction</span>
            <span className="font-semibold text-[#03373D]">Successful</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard/myParcels"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#CAEB66] text-[#03373D] font-semibold hover:bg-[#b9dc55] transition"
          >
            My Parcels
            <FaArrowRight />
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

export default PaymentSuccess;
