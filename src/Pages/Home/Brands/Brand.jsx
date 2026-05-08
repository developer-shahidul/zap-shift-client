
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import amazon from "../../../assets/brands/amazon.png"
import amazon_vector from "../../../assets/brands/amazon_vector.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"
import star_people from "../../../assets/brands/start_people.png"

const Brand = () => {

    return (
        <div className='my-25' >
            <div className='text-center'><h2 className='text-[28px] font-extrabold text-[#03373D] mb-10.5'> We've helped thousands of sales teams</h2></div>
            <Swiper

                loop={true}
                autoplay={{
                    delay: 1500, // between slides
                    disableOnInteraction: false,
                    waitForTransition: false,
                }}

                navigation={true}
                modules={[Autoplay]}
                slidesPerView={3}
                spaceBetween={10}
                scrollbar={{ draggable: true }}
                className="mySwiper"
                speed={1000}
            >
                <SwiperSlide><img src={amazon} alt="" /></SwiperSlide>
                <SwiperSlide><img src={casio} alt="" /> </SwiperSlide>
                <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
                <SwiperSlide><img src={amazon_vector} alt="" /></SwiperSlide>
                <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
                <SwiperSlide><img src={star} alt="" /></SwiperSlide>
                <SwiperSlide><img src={star_people} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Brand;