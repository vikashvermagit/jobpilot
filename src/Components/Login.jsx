import Image from 'next/image'
import React from 'react'

const Login = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-[#f2f7fc] bg-opacity-100 z-50 text-5xl text-black">

            <div className='flex justify-between mt-24 m-10'>
                <div className='border w-3/5 items-center flex flex-col justify-center '>
                    <h1 className='text-5xl font-bold'>Welcome Back!!</h1>

                    <form className="space-y-4">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.364 11.636C14.3837 10.6558 13.217 9.93013 11.9439 9.49085C13.3074 8.55179 14.2031 6.9802 14.2031 5.20312C14.2031 2.33413 11.869 0 9 0C6.131 0 3.79688 2.33413 3.79688 5.20312C3.79688 6.9802 4.69262 8.55179 6.05609 9.49085C4.78308 9.93013 3.61631 10.6558 2.63605 11.636C0.936176 13.3359 0 15.596 0 18H1.40625C1.40625 13.8128 4.81279 10.4062 9 10.4062C13.1872 10.4062 16.5938 13.8128 16.5938 18H18C18 15.596 17.0638 13.3359 15.364 11.636ZM9 9C6.90641 9 5.20312 7.29675 5.20312 5.20312C5.20312 3.1095 6.90641 1.40625 9 1.40625C11.0936 1.40625 12.7969 3.1095 12.7969 5.20312C12.7969 7.29675 11.0936 9 9 9Z" fill="#6C757D" />
                                </svg>

                            </span>
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full pl-10 py-2 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33073 3.3335H16.6641C17.5807 3.3335 18.3307 4.0835 18.3307 5.00016V15.0002C18.3307 15.9168 17.5807 16.6668 16.6641 16.6668H3.33073C2.41406 16.6668 1.66406 15.9168 1.66406 15.0002V5.00016C1.66406 4.0835 2.41406 3.3335 3.33073 3.3335Z" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.3307 5L9.9974 10.8333L1.66406 5" stroke="#6C757D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </span>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full pl-10 py-2 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </form>
                </div>

                <div className='border'>
                    image
                </div>
            </div>

            <button
                className="mt-4 text-sm text-red-500 hover:underline"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    )
}

export default Login