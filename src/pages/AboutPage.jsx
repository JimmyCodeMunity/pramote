import React from 'react';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
    return (
        <div className="bg-blue-700 w-full overflow-hidden">
            <div className="flex px-6 sm:px-16 justify-center items-center">
                <div className="w-full xl:max-w-[1280px]">
                    <Navbar />
                </div>
            </div>

            <div className="flex justify-center items-start bg-white">
                <div className="w-full xl:max-w-[1280px]">
                    <About/>
                </div>
            </div>


            <div className="flex justify-center items-start bg-blue-700">
                <div className="w-full xl:max-w-[1280px]">
                    <Footer className="absolute bottom-0"/>
                </div>
            </div>






        </div>
    );
}

export default AboutPage;
