import React from 'react';
import { cons4, developer, search } from '../assets';
import { Search } from 'react-feather';
import { currentjobs, jobs } from '../constants';

const Board = () => {
    return (
        <section id='home' className="sm:px-16">
            <div className="flex md:flex-row flex-col py-6 sm:py-16 sm:px-0 px-6">
                <div className="flex-1 flex justify-center items-start flex-col xl:px-0 ">




                    <p className="text-black max-w-[470px] relative font-poppins font-large text-[30px] tracking-wider leading-[30.8px] py-5">

                        When Searching for a job
                        <br className="hidden sm:block" /> {" "}
                        don't go in blind,Research first.
                    </p>
                    <div className="flex sm:flex-row items-center space-x-3">
                        <input type="text" placeholder='enter job name' className="px-5 my-10 sm:h-14 h-12 text-2xl w-full border border-slate-500 focus:border-blue-500 rounded-3xl" />
                        <button className="bg-blue-500 sm:h-14 h-12 sm:w-16 w-12 text-white rounded-3xl justify-center items-center flex">
                            <Search color="white" size={30} />
                        </button>
                    </div>
                    <div className="flex sm:flex-row sm:space-y-0 space-y-2 flex-wrap justify-between items-center space-x-2">
                        <p className="font-poppins">Popular searches:</p>
                        <p className="font-poppins bg-slate-200 rounded-3xl p-2 text-blue-400">Developer</p>
                        <p className="font-poppins bg-slate-200 rounded-3xl p-2 text-blue-400">Marketer</p>
                        <p className="font-poppins bg-slate-200 rounded-3xl p-2 text-blue-400">Trainer</p>
                        <p className="font-poppins bg-slate-200 rounded-3xl p-2 text-blue-400">Analyst</p>
                    </div>

                </div>



                <div className="flex-1 flex justify-center items-center md:my-4 relative">
                    <img src={search} alt="w-[100%] h-[100%] relative z-[5]" className="" />
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
            </div>


            <div className="bg-blue-400 w-full rounded-2xl p-12">
                <div className="text-center py-5">
                    <h2 className="font-large text-slate-700 tracking-wider sm:text-[30px] text-[16px]">Thousands of
                        <br className="sm:block hidden" />
                        dream jobs available now
                    </h2>
                </div>
                <div className="md:flex-row flex-col flex w-full justify-between items-center sm:px-10 space-y-2">
                    {jobs.map((job) => (
                        <div className="bg-white h-40 md:w-40 w-full rounded-2xl justify-center items-center flex space-y-4 flex-col">
                            <img src={job.image} className="w-20 h-20" alt="" />
                            <p className="font-normal">{job.title}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="w-full">
                <h2 className="text-black font-semibold text-[20px] py-5">Recent available Jobs</h2>

                {currentjobs.map((cjob, index) => (
                    <div className="md:flex-row my-6 flex-col flex justify-between border border-slate-300 p-5 items-center rounded-2xl w-full">
                        <div className="sm:flex-row flex-col flex items-center space-x-3">
                            <img src={cjob.image} className="w-16 h-16" alt="" />
                            <div className="items-center justify-center">
                                <h3 className="text-black font-semibold">{cjob.title}</h3>
                                <p className="text-blue-400">Pramote Consultants</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-500">{cjob.type}</p>
                        </div>
                        <div>
                            <p className="text-slate-500">{cjob.location}</p>
                        </div>
                        <div>
                            <p className="text-slate-500">Kshs.34000</p>
                        </div>
                        <div>
                            <button className="hover:bg-blue-300 justify-center border border-slate-400 items-center p-2 rounded-2xl">Apply</button>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}

export default Board;
