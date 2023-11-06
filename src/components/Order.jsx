import React from 'react';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // This will log all the form data when the form is submitted
        Swal.fire({
            icon: 'success',
            title: 'Order successful.',
            showConfirmButton: false,
            timer: 1000
        });
    };

    return (
        <div className='px-1 md:px-0' id='order'>
            <div className='text-4xl mb-4'>
                Place Your Order
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-10 mx-auto p-4 border border-gray-300 rounded-md">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="mb-1">
                        <label className="block">
                            Select your product:
                            <select {...register('product', { required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1">
                                <option value="product1">Item-1</option>
                                <option value="product2">Item-2</option>
                                <option value="product3">Item-3</option>
                                <option value="product4">Item-4</option>
                                <option value="product5">Item-5</option>
                                <option value="product6">Item-6</option>
                                
                            </select>
                        </label>
                        {errors.product && <p className="text-red-500">Product is required</p>}
                    </div>
                    <div className="mb-1">
                        <label className="block">
                            Select quantity:
                            <input type="number" {...register('quantity',{ required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </label>
                        {errors.quantity && <p className="text-red-500">Quantity is required</p>}
                    </div>

                    <div className="mb-1">
                        <label className="block">
                            Select product size:
                            <select {...register('size')} className="w-full border border-gray-300 rounded-md p-2 mt-1">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </label>
                    </div>

                    <div className="mb-1">
                        <label className="block">
                            User Name:
                            <input type="text" {...register('userName',{ required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </label>
                        {errors.userName && <p className="text-red-500">UserName is required</p>}
                    </div>

                    <div className="mb-1">
                        <label className="block">
                            User Address:
                            <input type="text" {...register('userAddress',{ required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </label>
                        {errors.userAddress && <p className="text-red-500">UserAddress is required</p>}
                    </div>

                    <div className="mb-1">
                        <label className="block">
                            Phone Number:
                            <input type="tel" {...register('phoneNumber',{ required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </label>
                        {errors.phoneNumber && <p className="text-red-500">PhoneNumber is required</p>}
                    </div>

                    <div className="mb-1">
                        <label className="block">
                            Email Address:
                            <input type="email" {...register('email',{ required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </label>
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </div>

                    <div className="mb-1">
                        <label className="block">
                            Expected Delivery Date:
                            <input type="date" {...register('deliveryDate',{ required: true })} className="w-full border border-gray-300 rounded-md p-2 mt-1" />
                        </label>
                        {errors.deliveryDate && <p className="text-red-500">DeliveryDate is required</p>}
                    </div>
                </div>

                <button type="submit" className="btn btn-outline w-1/2 md:w-1/3 mt-4 text-orange-500 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-600 hover:border-blue-600 hover:bg-slate-100 hover:text-blue-500">
                    Submit
                </button>
            </form>
        </div>

    );
};

export default Order;