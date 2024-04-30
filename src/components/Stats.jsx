import React from 'react';
import { stats } from '../constants';

const Stats = () => {
    return (
        <section className='flex sm:my-16 flex-row flex-wrap items-center justify-center sm:mb-10 mb-6'>
            {stats.map((stat) => (
                <div key={stat.id} className='flex-1 flex justify-start items-center flex-row m-3'>
                    <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[43px] text-blue-500'>{stat.value}</h4>
                    <p className='font-poppins font-normal xs:text-20px text=[15px] xs:leading-[26px] leading-[21px]  uppercase ml-3 bg-gradient-to-t from-blue-500 via-slate-500 to-teal-500 text-transparent bg-clip-text'>{stat.title}</p>
                </div>
            ))}
        </section>
    );
}

export default Stats;
