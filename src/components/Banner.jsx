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
                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} interval={6000} showThumbs={false} transitionTime={1500} className='text-center ' >
                <div className="relative w-full h-[70vh] md:h-[50vh] lg:h-[100vh]">
                    <img src={img1} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                        <div className='text-white space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-4 md:pl-12' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-3xl md:text-4xl font-bold text-start'>Unfold Elegance, Embrace Sustainability – Rainbow Non Woven, Your Stylish Choice.</h2>
                            <p className='text-justify'>Welcome to Rainbow Non Woven, your one-stop destination for a vibrant array of non-woven products, specializing in tissue bags. At Rainbow Non Woven, we believe in blending style with sustainability, offering a range of eco-friendly solutions that not only look good but also contribute to a greener planet.</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[70vh] md:h-[50vh] lg:h-[100vh]">
                    <img src={img2} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                        <div className='text-white space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-4 md:pl-12' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-3xl md:text-4xl font-bold text-start'>Where Quality Meets Eco-Friendliness: Explore Rainbow Non Woven Products.</h2>
                            <p className='text-justify'>Our commitment to quality craftsmanship ensures that each product, from our eye-catching tissue bags to other non-woven items, is designed to exceed your expectations. We take pride in weaving dreams into every thread, bringing you products that reflect elegance, comfort, and a touch of the extraordinary.</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[70vh] md:h-[50vh] lg:h-[100vh]">
                    <img src={img3} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                        <div className='text-white space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-4 md:pl-12' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-3xl md:text-4xl font-bold text-start'>We Weave Dreams into Every Thread – Rainbow Non Woven, Unveiling a Colorful Tomorrow.</h2>
                            <p className='text-justify'>Embrace a world of possibilities with Rainbow Non Woven. Our tagline, "Wrap Your World in Colorful Comfort," encapsulates our mission to provide you with products that add a splash of color to your daily life while prioritizing environmental responsibility. Join us in our journey towards a brighter, more sustainable future, where your choices make a positive impact on the planet.</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[70vh] md:h-[50vh] lg:h-[100vh]">
                    <img src={img4} className="w-full h-full" />
                    <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                        <div className='text-white space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-4 md:pl-12' data-aos="fade-down-right" data-aos-duration="1000">
                            <h2 className=' text-3xl md:text-4xl font-bold text-start'>Carry the Rainbow Everywhere You Go – Eco-Friendly Non Woven Products for a Brighter Future.</h2>
                            <p className='text-justify'>Explore Rainbow Non Woven today and discover the perfect blend of style, comfort, and eco-consciousness. Carry the rainbow with you, and let your choices speak volumes about your commitment to a colorful and environmentally friendly lifestyle.</p>
                            <div className='flex justify-start'>
                                <button onClick={scrollToProductSection} className='btn btn-outline text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg></button>
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