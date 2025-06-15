import { Person } from '@/lib/administration/Administration';
import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

interface person {
    person: Person;
} 
const PersonCard = ({person}:person) => {
    return (
        <div  className="">
            <div className="border border-secondary rounded-lg p-2 ">
                <div className='flex gap-4 mb-4 '>
                    <img className='w-64 rounded' src={person.image} alt={person.name} />
                    <p className="text-gray-500 text-text bg-secondary p-4 ">{person.speech}</p>
                </div>
                <h3 className="text-xl font-semibold text-primary">{person.name}</h3>
                <p className="text-gray-600 text-text/70">{person.role}</p>
                <p className="text-gray-600 text-text/70 flex items-center gap-2"> <FaUserGraduate />
                {person.education}</p>
                
            </div>
        </div>
    );
};

export default PersonCard;