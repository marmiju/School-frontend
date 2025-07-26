import class_divission from '@/lib/academic/class_divission';
import React from 'react';

const classPage = () => {
    const academicClassDivisions = class_divission()
    return (
        <div className='max-w-[1280px] mx-auto my-2 py-20 col-span-12  text-center space-y-20 '>
            {
                academicClassDivisions.map((division, index) => (
                    <div key={index} >
                        <p className='text-4xl font-bold text-primary'>{division.name}</p>
                        <div className='text-text flex flex-wrap justify-center items-center gap-4 my-4'>
                           {
                               division.values.map((val,index)=>(
                                <div className='p-10 bg-secondary rounded-md' key={index}>
                                    <p>{val}</p>
                                </div>
                               ))
                           }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default classPage;