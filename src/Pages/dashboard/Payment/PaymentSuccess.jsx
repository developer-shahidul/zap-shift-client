import { useEffect, useState, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import {
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaHome,
  FaSpinner,
} from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isCalledRef = useRef(false);

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    if (isCalledRef.current) return;
    isCalledRef.current = true;

    setLoading(true);
    axiosSecure
      .patch(`/create-checkout-session/payment-success?session_id=${sessionId}`)
      .then((res) => {
        console.log("Payment response:", res.data);
        setPaymentInfo(res.data?.payment || res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Payment error:", err);
        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Something went wrong while verifying payment.",
        );
        setLoading(false);
      });
  }, [sessionId, axiosSecure]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 gap-4">
        <FaSpinner className="animate-spin text-5xl text-[#03373D]" />
        <p className="text-gray-600 text-lg font-medium">
          Verifying payment details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <FaExclamationTriangle className="text-7xl text-red-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#03373D] mb-4">
            Payment Status Check Failed
          </h1>
          <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">{error}</p>
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
  }

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

        <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">
          Your payment has been successfully completed. Your parcel is now ready
          for the next step.
        </p>

        {/* Payment Details */}
        <div className="bg-[#F5F9F9] rounded-2xl p-5 mb-8">
          {/* Amount */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
            <span className="text-gray-600">Amount Paid</span>

            <span className="font-bold text-xl text-[#03373D]">
              {paymentInfo?.amount
                ? `${paymentInfo.amount} ${paymentInfo?.currency ? paymentInfo.currency.toUpperCase() : "BDT"}`
                : "N/A"}
            </span>
          </div>

          {/* Payment Status */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
            <span className="text-gray-600">Payment Status</span>

            <span className="font-semibold text-[#0AB010]">Paid</span>
          </div>

          {/* Transaction */}
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Transaction</span>

            <span className="font-semibold text-[#03373D]">
              {paymentInfo?.transactionId ||
                paymentInfo?.paymentIntentId ||
                "Successful"}
            </span>
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
