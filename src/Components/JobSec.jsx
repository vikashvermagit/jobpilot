import Image from 'next/image'
import React from 'react'
import Jobcard from './Jobcard'

function JobSec() {
    return (
        <div className='flex p-5 gap-5'>
            <div className="bg-[#EBF5F4] border p-4 rounded-lg shadow-md w-full max-w-xs mt-5">
                {/* Search by Job Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Search by Job Title</label>
                    <div className="flex items-center bg-white border rounded-md px-2">
                        <Image src={"/location.svg"} width={20} height={20} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Job title or company"
                            className="w-full p-2 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Location</label>
                    <div className="flex items-center bg-white border rounded-md px-2">
                        <Image src={"/beg.svg"} width={20} height={20} className="text-gray-400" />
                        <select className="w-full p-2 bg-transparent focus:outline-none">
                            <option>Choose city</option>
                            <option>Jaipur</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            {/* Add more cities as needed */}
                        </select>
                    </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Category</label>
                    <ul className="space-y-2">
                        {[
                            { name: 'Commerce', count: 10 },
                            { name: 'Telecommunications', count: 10 },
                            { name: 'Hotels & Tourism', count: 10 },
                            { name: 'Education', count: 10 },
                            { name: 'Financial Services', count: 10 },
                        ].map((category, index) => (
                            <li key={index} className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {category.name}
                                </label>
                                <span className="text-gray-500">{category.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Show More Button */}
                <button className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold">
                    Show More
                </button>
            </div>

            <div className='w-full mt-5'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-medium text-[#6C757D]'>Showing 6-6 of 10 results</h1>
                    <button className='border px-3 py-1 rounded-md flex gap-3 text-[#6C757D] border-[#6C757D]'>Sort by latest
                        <Image src={"/arrow.svg"} width={20} height={20} />
                    </button>
                </div>

                <div>
                    <Jobcard />
                    <Jobcard />
                    <Jobcard />
                    <Jobcard />
                    <Jobcard />
                    <Jobcard />
                </div>
            </div>
        </div>
    )
}

export default JobSec