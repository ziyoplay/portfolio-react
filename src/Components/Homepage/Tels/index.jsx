import React from 'react';
import './style.css'
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


const Tels = () => {
    return (
        <div className='tels container'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./images/image 89.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/image 90.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/image 89.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/image 90.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/image 89.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/image 90.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Tels            