import React from 'react';
import { whychooseprof } from '../constants';

const WhyChooseMe = () => {
    return (
        <section className='py-6 sm:py-2'>
            <h1 className="text-blue-700 text-center font-semibold font-poppins text-[30px] mb-6">Why Choose Us</h1>
            <h1 className="text-blue-500 text-center font-semibold font-poppins text-[20px] mb-6">For professionals</h1>
            <div className="flex sm:py-4 py-6 sm:flex-row flex-col justify-between items-center w-full flex-1">
                {whychooseprof.map((whyprof, index) => (
                    <div className='sm:mb-0 mb-10'>

                        <a href="#" class="h-[200px] block max-w-sm p-6 bg-white border border-blue-300 rounded-lg shadow-lg shadow-gray-300 hover:bg-gray-100 light:bg-gray-800 light:border-gray-700 ">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{whyprof.title}</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">{whyprof.context}</p>
                        </a>
                    </div>

                ))}



            </div>
            <h1 className="text-blue-500 text-center font-semibold font-poppins text-[20px] sm:my-6 my-2">For business</h1>
            <div className="flex sm:py-4 py-6 sm:flex-row flex-col justify-between items-center w-full flex-1">
                {whychooseprof.map((whyprof, index) => (
                    <div className='sm:mb-0 mb-10'>

                        <a href="#" class="h-[200px] block max-w-sm p-6 bg-white border border-blue-300 rounded-lg shadow-lg shadow-gray-300 hover:bg-gray-100 light:bg-gray-800 light:border-gray-700 light:hover:bg-gray-700">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{whyprof.title}</h5>
                            <p class="text-gray-700 dark:text-gray-400">{whyprof.context}</p>
                        </a>
                    </div>

                ))}
                



            </div>

        </section>
    );
}

export default WhyChooseMe;
