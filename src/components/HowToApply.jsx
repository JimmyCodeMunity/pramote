import React from 'react';
import { Link } from 'react-router-dom';

const HowToApply = () => {
  return (
    <div className="w-full sm:px-16 px-6 md:py-16 py-6 md:flex-row flex flex-col">

                <div className="w-full">
                <h4 className="text-start py-4 text-slate-600">Professionals</h4>
                    <ol class=" overflow-hidden space-y-8">
                        <li
                            class="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                            <a href="https://pagedone.io/" class="flex items-start font-medium w-full  ">
                                <span
                                    class="w-8 h-8 aspect-square bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                    1
                                </span>
                                <div class="block">
                                    <h4 class="text-base  text-indigo-600 mb-2">Create your profile</h4>
                                    <p class="text-sm text-gray-600 max-w-xs mb-4">To
                                        Build an attractive and engaging job profile. Don't worry,
                                        we will help you build an
                                        attractive profile that attracts potential employers across the globe.
                                        <br /></p>


                                </div>
                            </a>
                        </li>
                        <li
                            class="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a class="flex items-center font-medium w-full  ">
                                <span
                                    class="w-8 h-8 bg-indigo-50 relative z-20 border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">2</span>
                                <div class="block">
                                    <h4 class="text-base  text-indigo-600 mb-2">Browse Opportunities</h4>
                                    <p class="text-sm text-gray-600 max-w-xs">
                                        Continually explore current job openings from foreign
                                        companies seeking Kenyan talent. You can get current
                                        job vacancies on our Job Board.
                                    </p>
                                    <Link to="/jobs">
                                        <button type="button"
                                            class="py-2.5 my-4 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">Enter Job Board</button>
                                    </Link>
                                </div>
                            </a>
                        </li>
                        <li
                            class="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a class="flex items-center font-medium w-full  ">
                                <span
                                    class="w-8 h-8 bg-indigo-50 relative z-20 border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">3</span>
                                <div class="block">
                                    <h4 class="text-base  text-indigo-600 mb-2">Apply for Your Dream Job</h4>
                                    <p class="text-sm text-gray-600 max-w-xs">
                                        Click on the specific job posting and submit your application/interest.
                                        Ensure to adhere to all the instructions provided.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li class="relative flex-1 ">
                            <a class="flex items-start font-medium w-full  ">
                                <span
                                    class="w-8 h-8 bg-gray-50 border-2 relative z-10 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">4</span>
                                <div class="block">
                                    <h4 class="text-base  text-gray-900 mb-2">We'll be in touch</h4>
                                    <p class="text-sm text-gray-600 max-w-xs">
                                    Our team will review your application and may contact
                                     you for further information or an interview. If our 
                                     team finds that you are suitable for the job, we will provide all the 
                                    guidelines and support to help you land the gig!
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ol>
                </div>


                <div className="w-full">
                <h4 className="text-start py-4 text-slate-600">Business</h4>
                    <ol class=" overflow-hidden space-y-8">
                        <li
                            class="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
                            <a href="https://pagedone.io/" class="flex items-start font-medium w-full  ">
                                <span
                                    class="w-8 h-8 aspect-square bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                                    1
                                </span>
                                <div class="block">
                                    <h4 class="text-base  text-indigo-600 mb-2">Connect with Top Talent</h4>
                                    <p class="text-sm text-gray-600 max-w-xs mb-4">Share your specific hiring 
                                    needs with our team. We'll leverage our network of pre-vetted Kenyan professionals 
                                    to identify the perfect fit for your company.
                                        <br /></p>


                                </div>
                            </a>
                        </li>
                        <li
                            class="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a class="flex items-center font-medium w-full  ">
                                <span
                                    class="w-8 h-8 bg-indigo-50 relative z-20 border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">2</span>
                                <div class="block">
                                    <h4 class="text-base  text-indigo-600 mb-2">Streamlined Hiring Process</h4>
                                    <p class="text-sm text-gray-600 max-w-xs">
                                    Benefit from our streamlined application process, saving you time and resources.  We handle the initial screening and shortlist the most qualified candidates for your review.
                                    </p>
                                    <Link to="/jobs">
                                        <button type="button"
                                            class="py-2.5 my-4 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">Enter Job Board</button>
                                    </Link>
                                </div>
                            </a>
                        </li>
                        <li
                            class="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
                            <a class="flex items-center font-medium w-full  ">
                                <span
                                    class="w-8 h-8 bg-indigo-50 relative z-20 border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">3</span>
                                <div class="block">
                                    <h4 class="text-base  text-indigo-600 mb-2">Cultural Understanding</h4>
                                    <p class="text-sm text-gray-600 max-w-xs">
                                    Our team's deep understanding of the Kenyan workforce helps bridge cultural gaps and ensures effective communication between you and your new employees.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li class="relative flex-1 ">
                            <a class="flex items-start font-medium w-full  ">
                                <span
                                    class="w-8 h-8 bg-gray-50 border-2 relative z-10 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">4</span>
                                <div class="block">
                                    <h4 class="text-base  text-gray-900 mb-2">Cost effective solutions</h4>
                                    <p class="text-sm text-gray-600 max-w-xs">
                                    Eliminate the need for expensive relocation costs by finding skilled talent within Kenya. Our transparent pricing structure ensures you know exactly what to expect.
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ol>
                </div>



            </div>
  );
}

export default HowToApply;
