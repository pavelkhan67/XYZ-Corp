import React from 'react';

const OurClients = () => {
    return (
        <div className='pt-10 lg:pt-12' id='clients'>
            <h2 className='text-3xl md:text-4xl font-semibold' style={{ color: 'rgba(31, 52, 122, 1)' }}>Our Happy Clients</h2>
            {/* <p className='pt-5 font-semibold'>Here are some of our happy Clients</p> */}

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-3 mt-5 md:mt-8 px-1 md:px-0'>
                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Shawpno Super Store</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Nestle (Bangladesh) Ltd.</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Square Pharmaceuticals Ltd.</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Beximco Pharmaceuticals Ltd.</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Panda Footwear</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Walton Group</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Global Brand Computer</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Fair Electronics (Samsung Mobile)</p>
                </div>
                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Itel Mobile</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>PAGASUS</p>
                </div>

                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Sofel Telecom Ltd. (Micromax)</p>
                </div>
                
                <div className='group text-center  border border-slate-300 py-4 lg:py-5 px-2 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <p className='text-lg group-hover:text-blue-500'>Many More +</p>
                </div>
                
            </div>
        </div>
    );
};

export default OurClients;