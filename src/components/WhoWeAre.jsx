import React from 'react';
import img1 from '../assets/photo/year-of-estd.png'
import img2 from '../assets/photo/total-employee.png'
import img3 from '../assets/photo/copyrited.png'
import img4 from '../assets/photo/Happy-Users.png'
import img5 from '../assets/photo/Software-Installations.png'
import img6 from '../assets/photo/support-system.png'

const WhoWeAre = () => {
    return (
        <div className='md:grid grid-cols-2 mb-10 p-1 md:p-0' id='about'>
            <div className='pe-2 text-left flex flex-col justify-center'>
                <h2 className='text-4xl mb-3'>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem vel iusto. Reiciendis mollitia veniam amet. Explicabo iure, placeat, dolorem ad ipsam, expedita dicta vero assumenda nihil velit ea soluta aperiam odit? Magni vel eveniet dolorem sunt, placeat cumque repellendus nobis sed voluptate. Ea sapiente dolor officia quo sint laboriosam.</p>
            </div>

            <div className='grid grid-cols-3 gap-2 mt-5 md:mt-0'>
                <div className='flex flex-col justify-center items-center border border-slate-300 py-2 px-1 rounded hover:shadow-lg hover:border-primary'>
                    <img className='w-12' src={img1} alt="" />
                    <p className='text-3xl pt-2'>2000</p>
                    <p>Years of Establishment</p>
                </div>
                <div className='flex flex-col justify-center items-center border border-slate-300 py-2 px-1 rounded hover:shadow-lg hover:border-primary'>
                    <img className='w-12' src={img2} alt="" />
                    <p className='text-3xl pt-2'>200+</p>
                    <p>Total Employees</p>
                </div>
                <div className='flex flex-col justify-center items-center border border-slate-300 py-2 px-1 rounded hover:shadow-lg hover:border-primary'>
                    <img className='w-12' src={img3} alt="" />
                    <p className='text-3xl pt-2'>10+</p>
                    <p>Copyrighted Products</p>
                </div>
                <div className='flex flex-col justify-center items-center border border-slate-300 py-2 px-1 rounded hover:shadow-lg hover:border-primary'>
                    <img className='w-12' src={img4} alt="" />
                    <p className='text-3xl pt-2'>5000+</p>
                    <p>Services Delivered</p>
                </div>
                <div className='flex flex-col justify-center items-center border border-slate-300 py-2 px-1 rounded hover:shadow-lg hover:border-primary'>
                    <img className='w-12' src={img5} alt="" />
                    <p className='text-3xl pt-2'>1ml+</p>
                    <p>Happy Users</p>
                </div>
                <div className='flex flex-col justify-center items-center border border-slate-300 py-2 px-1 rounded hover:shadow-lg hover:border-primary'>
                    <img className='w-12' src={img6} alt="" />
                    <p className='text-3xl pt-2'>24/7</p>
                    <p>Support system</p>
                </div>                
            </div>
        </div>
    );
};

export default WhoWeAre;