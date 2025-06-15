import PersonCard from '@/app/components/personCard/PersonCard';
import Administration, { Person } from '@/lib/administration/Administration';
import React from 'react';

const page = () => {
    const persons:Person[] = Administration({cetagory: 'staffs'});
    return (
        <div>
            <p className="my-2 py-20 col-span-12 border text-center text-4xl font-bold text-background rounded-sm bg-primary">
                আমাদের  স্টাফবৃন্দ
            </p>
            <div className="max-w-[1280px] mx-auto flex flex-wrap  space-x-1 space-y-1">
                {persons.map((person, index) => (
                    <PersonCard key={index} person={person}/>
                ))}
            </div>
        </div>
    );
};

export default page;