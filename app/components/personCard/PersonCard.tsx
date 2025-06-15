import { Person } from '@/lib/administration/Administration';
import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

interface person {
    person: Person;
} 
const PersonCard = ({person}:person) => {
    return (
        <div  className="relative">
            <div className="border border-secondary bg-secondary/20 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer group   ">
                <div className='flex gap-4 mb-1'>
                    
                        <img className='w-64 rounded' src={person.image} alt={person.name} />
                        
                 
                    {
                        person.speech && <p className='text-md p-4 bg-secondary'>{person.speech}</p>
                    }
                </div>
               <div className='  bg-secondary w-full overflow-hidden rounded-lg p-4 shadow-md'>
                 <h3 className="text-xl font-semibold text-primary">{person.name}</h3>
                <p className="text-gray-600 text-text/70">{person.role}</p>
                <p className="text-gray-600 text-text/70 flex items-center gap-2"> <FaUserGraduate />
                {person.education}</p>
               </div>
                
            </div>
        </div>
    );
};

export default PersonCard;