import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img/prod5.jpg'
import img2 from '../assets/img/prod1.jpg'
import img3 from '../assets/img/prod3.jpg'
import img4 from '../assets/img/prod4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const scrollToProductSection = () => {
        const productSection = document.getElementById('product');
        if (productSection) {
            const targetPosition = productSection.offsetTop; // Get the position of the target element
            const startPosition = window.pageYOffset; // Get the current position
            const distance = targetPosition - startPosition;
            const duration = 1000; // Duration of the scroll animation in milliseconds
            let start = null;

            const smoothScroll = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);

                window.scrollTo(0, startPosition + distance * ease(percentage));

                if (progress < duration) {
                    requestAnimationFrame(smoothScroll);
                }
            };

            const ease = (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function, can be adjusted for different effects

            requestAnimationFrame(smoothScroll);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div id='main'>
                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} interval={6000} transitionTime={2000} className='text-center mb-10 ' >
                <div className="relative w-full h-[73vh] lg:h-[100vh]">
                    <img src={img1} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 lg:w-2/3 pl-4 md:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-4xl lg:text-4xl font-bold text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eius natus.</h2>
                            <p className='text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae cupiditate eaque architecto amet neque hic deleniti rem mollitia, reprehenderit assumenda?</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[73vh] lg:h-[100vh]">
                    <img src={img2} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 lg:w-2/3 pl-4 md:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-4xl lg:text-4xl font-bold text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga?</h2>
                            <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit nobis eaque magni minus dolores culpa architecto recusandae ratione dolor.</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[73vh] lg:h-[100vh]">
                    <img src={img3} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 lg:w-2/3 pl-4 md:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-4xl lg:text-4xl font-bold text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, fugiat!</h2>
                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam ex quae maiores deserunt illo sit facere, magni exercitationem deleniti?</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[73vh] lg:h-[100vh]">
                    <img src={img4} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-10/12 lg:w-2/3 pl-4 md:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-4xl lg:text-4xl font-bold text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                            <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae provident nam nulla. Odit dolores animi necessitatibus nam similique possimus quidem?</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            </div>
            
        </motion.div>
    );
};

export default Banner;