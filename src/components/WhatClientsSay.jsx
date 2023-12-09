import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../assets/img/user.jpg';
import img2 from '../assets/img/user1.jpg';
import img1 from '../assets/img/photo_collage.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-reveal';

const WhatClientsSay = () => {

    return (
        <div className='pt-10 lg:pt-12' id='review'>
            <Carousel className='text-center' autoPlay={true} interval={6000} infiniteLoop={true} showThumbs={false} transitionTime={1500} showStatus={false}>
                <div className='relative'>
                    <img className='h-[450px] md:h-[400px] w-full ' src={img1} alt="" />
                    <TypeAnimation
                        className='text-3xl md:text-4xl font-semibold absolute top-7 md:top-10 lg:top-12 left-1' style={{ color: 'rgba(31, 52, 122, 1)' }}
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "What Clients Say",
                            2000,
                            "Clients Review",
                            2000
                        ]}
                        speed={10} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        reset={true}
                    />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-14 lg:m-20 absolute bottom-7 lg:bottom-5'>
                        <div className='flex items-center'>
                            <div className='h-14 w-14'><img className='h-full w-full rounded-full' src={img} alt="" /></div>
                            <div className='ps-2 text-left'>
                            <Fade right><p className='text-blue-500 text-2xl'>Karim Mia</p></Fade>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>"I want to express my satisfaction with the non-woven shopping bags I purchased from your company. The quality is outstanding, and they have proven to be durable and reliable. The stylish design and vibrant colors make them a standout choice. Thank you for providing such a fantastic product!"</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[450px] md:h-[400px] w-full' src={img1} alt="" />
                    <TypeAnimation
                        className='text-3xl md:text-4xl font-semibold absolute top-7 md:top-10 lg:top-12 left-1' style={{ color: 'rgba(31, 52, 122, 1)' }}
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "What Clients Say",
                            2000,
                            "Clients Review",
                            2000
                        ]}
                        speed={10} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        reset={true}
                    />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-14 lg:m-20 absolute bottom-7 lg:bottom-5'>
                        <div className='flex items-center'>
                            <div className='h-14 w-14'><img className='h-full w-full rounded-full' src={img2} alt="" /></div>
                            <div className='ps-2 text-left'>
                            <Fade left><p className='text-blue-500 text-2xl'>Pavel Khan</p></Fade>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>"Beyond the exceptional quality of your non-woven shopping bags, I'd like to commend your customer service. The support I received during the purchasing process was outstanding. It's refreshing to experience such excellent customer care. Keep up the great work!"
</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[450px] md:h-[400px] w-full' src={img1} alt="" />
                    <TypeAnimation
                        className='text-3xl md:text-4xl font-semibold absolute top-7 md:top-10 lg:top-12 left-1' style={{ color: 'rgba(31, 52, 122, 1)' }}
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "What Clients Say",
                            2000,
                            "Clients Review",
                            2000
                        ]}
                        speed={10} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        reset={true}
                    />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-14 lg:m-20 absolute bottom-7 lg:bottom-5'>
                        <div className='flex items-center'>
                            <div className='h-14 w-14'><img className='h-full w-full rounded-full' src={img} alt="" /></div>
                            <div className='ps-2 text-left'>
                                <Fade top><p className='text-blue-500 text-2xl'>Maynul Islam</p></Fade>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>"I am delighted with the non-woven shopping bags I ordered from your company. They have exceeded my expectations in terms of both durability and aesthetics. Your product truly stands out, and I'm happy to endorse it to others. Thank you for providing a top-notch shopping bag option!"</p>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default WhatClientsSay;

