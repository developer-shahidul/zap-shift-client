import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerimg1 from "../../../assets/banner/banner1.png"
import bannerimg2 from "../../../assets/banner/banner2.png"
import bannerimg3 from "../../../assets/banner/banner3.png"
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>

            <div className="relative">
                <img src={bannerimg1} />
                <div className="absolute left-22 bottom-22 flex items-center justify-center gap-4 z-50">
                    <div className="flex items-center justify-center">
                        <button className="btn bg-[#CAEB66] rounded-[100px]">Track Your Parcel</button>
                        <button className="rounded-full h-11 w-11 flex items-center justify-center  bg-black text-[#CAEB66] text-xl"><MdArrowOutward /></button>
                    </div>
                    <button className="btn rounded-xl">Be A Rider</button>
                </div>
            </div>
            <div>
                <img src={bannerimg2} className="relative" />
                <div className="absolute left-22 bottom-22 flex items-center justify-center gap-4 z-50">
                    <div className="flex items-center justify-center">
                        <button className="btn bg-[#CAEB66] rounded-[100px]">Track Your Parcel</button>
                        <button className="rounded-full h-11 w-11 flex items-center justify-center  bg-black text-[#CAEB66] text-xl"><MdArrowOutward /></button>
                    </div>
                    <button className="btn rounded-xl">Be A Rider</button>
                </div>
            </div>
            <div>
                <img src={bannerimg3} className="relative" />
                <div className="absolute left-22 bottom-22 flex items-center justify-center gap-4 z-50">
                    <div className="flex items-center justify-center">
                        <button className="btn bg-[#CAEB66] rounded-[100px]">Track Your Parcel</button>
                        <button className="rounded-full h-11 w-11 flex items-center justify-center  bg-black text-[#CAEB66] text-xl"><MdArrowOutward /></button>
                    </div>
                    <button className="btn rounded-xl">Be A Rider</button>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;