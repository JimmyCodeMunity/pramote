import React from 'react';
import { Link } from 'react-router-dom';
import HowToApply from './HowToApply';
import OtherServices from './OtherServices';

const About = () => {
    return (
        <section class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8" id="aboutsec">

                <div class="mb-10 md:mb-16">
                    <h2 class="text-center text-2xl py-5 font-bold md:mb-6 lg:text-3xl text-white">About Us</h2>


                </div>
                <div className="w-full justify-center flex text-center sm:px-32">
                    <div className="md:w-[60%] w-full">
                        <h3 className="text-white text-lg title-font font-medium sm:text-[30px] text-[18px]">
                            We recognized the potential of the
                            digital workspace and envisioned how
                            it could elevate your career or business.
                        </h3>


                    </div>
                </div>
                <div className="w-full justify-center my-3 py-5 flex text-center sm:px-32">


                    <div className="md:w-[80%]">
                        <p className="text-slate-800 text-lg title-font font-medium">
                            In the modern digital era, businesses have the opportunity
                            to communicate with customers and talented professionals around the
                            world. However, you need specialized expertise and knowledge to make
                            the most of your online presence.
                            That's where Pramote Consultants comes in - we offer two powerful
                            solutions to help bridge this gap. Firstly, we connect highly skilled professionals from Kenya with exciting global job opportunities. And secondly, we provide comprehensive digital marketing services that enable businesses of all sizes to thrive online.
                        </p>
                    </div>



                </div>





            </div>




            <div className="w-full sm:px-16 px-6 sm:py-16 py-6 bg-white">

                <div className="text-center my-4">
                    <h1 className="text-blue-500 font-bold text-[18px]">How it works</h1>
                    <h3 className="text-slate-500">Professionals</h3>
                </div>
                <ol class="flex justify-center md:flex-row flex-col space-y-2 items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500  border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base  bg-slate-300 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                    <li class="flex items-center text-blue-600 dark:text-blue-500">
                        <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                            1
                        </span>
                        Profile Creation& <span class="hidden sm:inline-flex sm:ms-2">Matching</span>
                        <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>

                    </li>
                    <li class="flex items-center">
                        <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            2
                        </span>
                        Application & <span class="hidden sm:inline-flex sm:ms-2">Interview Preparation</span>
                        <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </li>
                    <li class="flex items-center">
                        <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            3
                        </span>
                        Training & Onboarding
                    </li>
                    <li class="flex items-center">
                        <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            4
                        </span>
                        Job Placepament & Ongoing support

                    </li>
                </ol>

            </div>
            <div className="w-full my-4 text-center">
                <h1 className="text-black font-bold md:text-[25px]">How to Apply</h1>
            </div>


            <HowToApply />

            <div className="w-full">
                <OtherServices />
            </div>

        </section>
    );
}

export default About;
