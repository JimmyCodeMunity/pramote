import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyChooseMe from '../components/WhyChooseMe';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import ContactUs from '../components/ContactUs';


const HomePage = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="flex px-6 sm:px-16 justify-center items-center bg-blue-700 text-white">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div id='homesec' className="flex justify-center items-start bg-blue-700">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>

      <div className="flex justify-center items-start mt-10 sm:px-16 px-6 bg-white">
        <div className="w-full xl:max-w-[1280px]">
          
          <Services />
          <WhyChooseMe />
          <Faq/>
          <ContactUs/>
        </div>
      </div>
      
      <div className="flex justify-center items-start mt-10 bg-blue-700">
                <div className="w-full xl:max-w-[1280px]">
                    <Footer/>
                </div>
            </div>




    </div>
  );
}

export default HomePage;
