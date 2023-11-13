import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/img/img3.jpg';
import img1 from '../assets/img/photo_collage.jpg';

const WhatClientsSay = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, 
        autoplaySpeed: 6000,
        appendDots: dots => (
            <div style={{ position: 'relative', top: '-10px', right: '0' }}>
                <ul style={{ margin: '0' }}> {dots} </ul>
            </div>
        )
    };

    return (
        <div id='review'>
            <Slider ref={sliderRef} {...settings}>
                <div className='relative'>
                    <img className='h-[400px] w-full' src={img1} alt="" />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-20 absolute bottom-7'>
                        <div className='flex items-center'>
                            <img className='rounded-full h-16 w-16' src={img} alt="" />
                            <div className='ps-2 text-left'>
                                <p className='text-primary text-2xl'>Karim Khan</p>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur, quidem blanditiis, aperiam, nesciunt debitis id ducimus quaerat asperiores laboriosam facilis magni. Magnam eligendi similique itaque consequuntur nostrum laborum doloribus?</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[400px] w-full' src={img1} alt="" />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-20 absolute bottom-7'>
                        <div className='flex items-center'>
                            <img className='rounded-full h-16 w-16' src={img} alt="" />
                            <div className='ps-2 text-left'>
                                <p className='text-primary text-2xl'>Pavel Khan</p>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur, quidem blanditiis, aperiam, nesciunt debitis id ducimus quaerat asperiores laboriosam facilis magni. Magnam eligendi similique itaque consequuntur nostrum laborum doloribus?</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default WhatClientsSay;

