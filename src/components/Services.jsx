import React from 'react';
import { cons3, cons4 } from '../assets';
import Button from './Button';

const Services = () => {
    return (
        <section id='services' className="">
        <h1 className="text-blue-700 sm:my-2 my-6 text-center font-semibold font-poppins text-[30px]">What We Do</h1>
            <div className="flex md:flex-row flex-col sm:py-5 py-6">

                <div className="flex-col flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
                    <img src={cons3} className="w-[80%] h-[100%]" alt="" />
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
                <div className="flex-1 flex justify-center items-start flex-col">
                    <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-blue-500 xs:leading-[76.8px] leading-[66.8px] w-full'>
                        For Businesses

                    </h2>
                    <p className="text-slate-500 text-[16px] leading-[30.8px] mx-w-[470px]">
                        Navigating the global marketplace can be a daunting task,
                        especially when it comes to finding the right talent. Many
                        foreign companies struggle to recruit skilled professionals
                        in unfamiliar territories. This is where Pramote Consultants
                        can help. We offer our services as your trusted partner,
                        granting access to a pool of pre-vetted Kenyan professionals
                        across various fields, including Sales, Customer Service, and Digital Marketing. With our assistance, you can easily find the right talent and build a team of highly qualified individuals to drive your business forward.
                    </p>
                    

                </div>
            </div>
            <div className="flex md:flex-row flex-col sm:py-0 py-6">

                
                <div className="flex-1 flex justify-center items-start flex-col">
                    <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-blue-500 xs:leading-[76.8px] leading-[66.8px] w-full'>
                        For Professionals

                    </h2>
                    <p className="text-slate-500 text-[16px] leading-[30.8px] mx-w-[470px]">
                        Navigating the global marketplace can be a daunting task,
                        especially when it comes to finding the right talent. Many
                        foreign companies struggle to recruit skilled professionals
                        in unfamiliar territories. This is where Pramote Consultants
                        can help. We offer our services as your trusted partner,
                        granting access to a pool of pre-vetted Kenyan professionals
                        across various fields, including Sales, Customer Service, and Digital Marketing. With our assistance, you can easily find the right talent and build a team of highly qualified individuals to drive your business forward.
                    </p>

                </div>
                <div className="flex-col flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
                    <img src={cons4} className="w-[80%] h-[100%]" alt="" />
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
            </div>




        </section>
    );
}

export default Services;
