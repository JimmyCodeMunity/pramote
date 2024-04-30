import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogRead from '../components/BlogRead';
import { useParams } from 'react-router-dom';

const ReadBlog = () => {
    const {id} = useParams();
    // console.log(id)
  return (
    <div className="w-full overflow-hidden bg-blue-700">
      <div className="flex px-6 sm:px-16 justify-center items-center ">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start bg-white">
        <div className="w-full xl:max-w-[1280px]">
          <BlogRead id={id} />
        </div>
      </div>

      <div className="flex justify-center items-start sm:px-16 px-6 bg-blue-700">
        <div className="w-full xl:max-w-[1280px]">

          <Footer className="absolute bottom-0"/>
        </div>
      </div>



    </div>
  );
}

export default ReadBlog;