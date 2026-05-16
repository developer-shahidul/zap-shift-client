import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  //   console.log(review);
  const { review: testimonial, user_photoURL, userName } = review;
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <FaQuoteLeft className="text-teal-500 text-3xl mb-3" />
        <p className="text-gray-900 text-sm leading-relaxed mb-4">
          {testimonial}
        </p>
        <div className="border-t border-dotted border-teal-400 my-3"></div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-1  flex items-center justify-center text-white font-bold">
            <img
              className=" rounded-full object-cover"
              src={user_photoURL}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold text-sm">{userName}</h4>
            <p className="text-gray-500 text-xs">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
