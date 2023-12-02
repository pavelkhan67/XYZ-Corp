import React from 'react';
import img1 from '../assets/img/prod1.jpg'
import img2 from '../assets/img/prod2.jpg'
import img3 from '../assets/img/prod3.jpg'
import img4 from '../assets/img/prod4.jpg'
import img5 from '../assets/img/prod5.jpg'

const OurProduct = () => {
    return (
        <div className='pt-10 lg:pt-12 px-1 md:px-0' id='product' >
            <h2 className='text-3xl md:text-4xl font-semibold'style={{ color: 'rgba(31, 52, 122, 1)' }}>Our Products</h2>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2'>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-36 md:h-52' src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">Item-1</h2>
                        <p className='text-start'>This is the best quality tissue bag that is available in the market. Git this product from us right now.</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>Sizes:</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>S</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>M</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>L</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>XL</p>
                        </div>
                        <div><span className='font-semibold'>Price:</span> 350tk</div>
                    </div>
                </div>

                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-36 md:h-52' src={img2} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">Item-2</h2>
                        <p className='text-start'>This is the best quality tissue bag that is available in the market. Git this product from us right now.</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>Sizes:</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>S</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>M</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>L</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>XL</p>
                        </div>
                        <div><span className='font-semibold'>Price:</span> 350tk</div>
                    </div>
                </div>

                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-36 md:h-52' src={img3} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">Item-3</h2>
                        <p className='text-start'>This is the best quality tissue bag that is available in the market. Git this product from us right now.</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>Sizes:</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>S</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>M</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>L</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>XL</p>
                        </div>
                        <div><span className='font-semibold'>Price:</span> 350tk</div>
                    </div>
                </div>

                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-36 md:h-52' src={img4} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">Item-4</h2>
                        <p className='text-start'>This is the best quality tissue bag that is available in the market. Git this product from us right now.</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>Sizes:</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>S</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>M</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>L</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>XL</p>
                        </div>
                        <div><span className='font-semibold'>Price:</span> 350tk</div>
                    </div>
                </div>

                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-36 md:h-52' src={img5} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">Item-5</h2>
                        <p className='text-start'>This is the best quality tissue bag that is available in the market. Git this product from us right now.</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>Sizes:</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>S</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>M</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>L</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>XL</p>
                        </div>
                        <div><span className='font-semibold'>Price:</span> 350tk</div>
                    </div>
                </div>

                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-36 md:h-52' src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">Item-6</h2>
                        <p className='text-start'>This is the best quality tissue bag that is available in the market. Git this product from us right now.</p>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold'>Sizes:</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>S</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>M</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>L</p>
                            <p className='border flex justify-center py-1 hover:bg-slate-300 border-slate-300'>XL</p>
                        </div>
                        <div><span className='font-semibold'>Price:</span> 350tk</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurProduct;