import PersonCard from '@/app/components/Card/personCard/PersonCard';
import Administration, { Person } from '@/lib/administration/Administration';
import React from 'react';

const page = () => {
    const persons:Person[] = Administration({cetagory: 'teachers'});
    return (
        <div>
            <p className="  max-w-[1280px] mx-auto my-2 py-20 col-span-12 border text-center text-4xl font-bold text-background rounded-sm bg-primary">
                আমাদের শিক্ষকবৃন্দ
            </p>
            <div className="max-w-[1280px] mx-auto  flex flex-wrap  gap-4">
                {persons.map((person, index) => (
                    <PersonCard person={person} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default page;