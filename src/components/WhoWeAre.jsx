import React from 'react';
import img1 from '../assets/photo/year-of-estd.png'
import img2 from '../assets/photo/total-employee.png'
import img3 from '../assets/photo/copyrited.png'
import img4 from '../assets/photo/Happy-Users.png'
import img5 from '../assets/photo/Software-Installations.png'
import img6 from '../assets/photo/support-system.png'
import { TypeAnimation } from 'react-type-animation';
import Fade from 'react-reveal/Fade';

const WhoWeAre = () => {
    return (
        <div className='lg:grid grid-cols-2 px-1 lg:px-0 pt-10 lg:pt-12' id='about'>
            <div className='pe-2 flex flex-col justify-center text-justify pr-2 md:pr-5'>
                <TypeAnimation
                    className='text-3xl md:text-4xl font-semibold mb-3' style={{ color: 'rgba(31, 52, 122, 1)' }}
                    // Same String at the start will only be typed once, initially
                    sequence={[
                        "Who We Are",
                        4000,
                        "Know About Us",
                        4000
                    ]}
                    speed={10} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                    reset={true}
                />
                <div className='ps-1 lg:ps-0'>
                    <Fade left><p className='py-2 text-blue-400'>Rainbow Non Woven - BD Limited is a Manufacturer of all kind of Non Woven Product (Tissue bag)</p></Fade>
                    <p>Rainbow Non Woven (Bd) Ltd is a fast growing Non Woven Bag Company in Bangladesh. It is a private limited company incorporate with the register of Joint Stock Companies located at Jamun, Dakshinkhan, Uttara, Dhaka, Bangladesh. </p>

                    <p className='py-1'>We are renowned Manufacturer, Exporter & Supplier of an exclusive collection of Non Woven Bags that includes Carry Bags, Rice Packing Bags, School Bags, Shoe Bags and Shopping Bags all of them are Non Woven. Our products are appreciated for durability, high tear resistance, superb weight holding and eco-friendly attributes.</p>

                    <p><span className='font-semibold'>Vision:</span> Our vision is to be one of the most admired company in and outside Bangladesh in the Non Bag Sector.</p>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-3 mt-5 lg:mt-0'>
                <div className='group flex flex-col justify-center items-center text-center  border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img1} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>2016</p>
                    <p>Years of Establishment</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center  border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img2} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>20+</p>
                    <p>Total Employees</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img3} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>5+</p>
                    <p>Copyrighted Products</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img4} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>50+</p>
                    <p>Services Delivered</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img5} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>1k+</p>
                    <p>Happy Users</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img6} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>24/7</p>
                    <p>Support system</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;