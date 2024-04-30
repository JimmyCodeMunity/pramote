import React from 'react';
import { cons1, cons2, bg, bulb } from '../assets';

const Hero = () => {
    return (
        <section id='home' className="flex md:flex-row flex-col py-6 sm:py-16">
            <div className="flex-1 md:py-20 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-8">
                <div className="items-center flex w-full animate-bounce animate-once animate-ease-linear">
                    <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                        Grow your <br className="hidden sm:block" /> {" "}
                        <span className="bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text">Business</span>
                        <br className="hidden sm:block" />
                    </h1>

                </div>



                <p className="text-black max-w-[470px] relative font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] py-5">

                    Grow your business, establish your brand, and put your customers first.
                </p>

                <div className='my-12'>
                    <a href="/jobs" className="bg-primary h-32 w-60 justify-center items-center text-center text-white p-5 rounded-2xl">Get Started</a>
                </div>

            </div>



            <div className="flex-1 flex justify-center items-center md:my-4 relative">
                <img src={bulb} alt="w-[100%] h-[100%] relative z-[5]" className="animate-pulse" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>


        </section>
    );
}

export default Hero;
