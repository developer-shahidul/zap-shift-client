import { use } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "../Reviews/ReviewCard";
import customer_top from "../../../assets/pic_icon/customer-top.png";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  // console.log(reviews)
  return (
    <div className="py-25 ">
      <div className="mb-10 text-center ">
        <div className="w-61 h-25 mx-auto mb-10">
          <img
            className="h-full w-full object-contain"
            src={customer_top}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[#03373D] font-extrabold text-[40px]">
            What our customers are sayings
          </h3>
          <p className="text-[#606060] font-medium lg:max-w-3xl lg:mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500, // between slides
          disableOnInteraction: false,
          waitForTransition: false,
        }}
        speed={1000}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
