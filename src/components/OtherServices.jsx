import React from 'react';

const OtherServices = () => {
    return (
        <div>

            <section class="text-gray-400 bg-gray-200 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-blue-500 mb-20">
                        <br class="hidden sm:block" />Our Services
                    </h1>
                    <div class="flex justify-center items-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="text-blue-500 text-lg title-font font-medium mb-2">Customer Support</h2>
                                <p class="leading-relaxed text-black">
                                    Our platform offers consistent and responsive customer
                                    support training to agents, enabling
                                    them to provide satisfactory support to all clients.
                                </p>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="text-blue-500 text-lg title-font font-medium mb-2">Digital Marketing</h2>
                                <p class="leading-relaxed text-black">
                                    Expanding your business online is crucial for growth.
                                    Our tailored services activate
                                    personalized strategies that fit your business needs.</p>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="text-blue-500 text-lg title-font font-medium mb-2">Career Growth</h2>
                                <p class="leading-relaxed text-black">
                                We provide industry-specific training sessions free of charge.
                                 Stay up-to-date with the latest knowledge and skills
                                 in your field with our diverse offerings.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OtherServices;
