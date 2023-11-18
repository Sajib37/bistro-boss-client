import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading='From 11:00am to 10:00pm' heading='ORDER ONLINE'></SectionTitle>
            <div className='max-w-screen-xl mx-auto'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-auto"
                >
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide1} alt="" />
                        <h1 className='uppercase absolute left-[10%] bottom-6 md:left-[30%] md:bottom-8 text-3xl md:text-5xl text-center text-white' style={{ textShadow: '4px 4px 1px black' }}>Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide2} alt="" />
                        <h1 className='uppercase absolute left-[10%] bottom-6 md:left-[30%] md:bottom-8 text-3xl md:text-5xl text-center text-white' style={{ textShadow: '4px 4px 1px black' }}>Pizza </h1>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide3} alt="" />
                        <h1 className='uppercase absolute left-[10%] bottom-6 md:left-[30%] md:bottom-8 text-3xl md:text-5xl text-center text-white' style={{ textShadow: '4px 4px 1px black' }}>Soup</h1>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide4} alt="" />
                        <h1 className='uppercase absolute left-[10%] bottom-6 md:left-[30%] md:bottom-8 text-3xl md:text-5xl text-center text-white' style={{ textShadow: '4px 4px 1px black' }}>Desert</h1>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide5} alt="" />
                        <h1 className='uppercase absolute left-[10%] bottom-6 md:left-[30%] md:bottom-8 text-3xl md:text-5xl text-center text-white' style={{ textShadow: '4px 4px 1px black' }}>Salad</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;