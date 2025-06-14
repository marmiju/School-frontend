import Administration, { Person } from '@/lib/administration/Administration';
import React from 'react';

const page = () => {
    const teachers:Person[] = Administration({cetagory: 'teachers'});
    return (
        <div>
            <p className="my-2 py-20 col-span-12 border text-center text-4xl font-bold text-background rounded-sm bg-primary">
                আমাদের শিক্ষকবৃন্দ
            </p>
            <div className="max-w-[1280px] mx-auto grid grid-cols-12">
                {teachers.map((teacher, index) => (
                    <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
                        <div className="border border-secondary rounded-lg p-4 ">
                            <img src={teacher.image} alt={teacher.name} />
                            <h3 className="text-xl font-semibold text-primary">{teacher.name}</h3>
                            <p className="text-gray-600 text-text/70">{teacher.role}</p>
                            <p className="text-gray-500 text-text">{teacher.speech}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};

export default page;