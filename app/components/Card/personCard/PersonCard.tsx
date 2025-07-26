'use client';
import { Person } from '@/lib/administration/Administration';
import React, { useState } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import PersonalModal from '../../Modal/PersonalModal';
import Image from 'next/image';

interface person {
    person: Person;
}
const PersonCard = ({ person }: person) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div
                className={`${isOpen ? 'block' : 'hidden'}`}>
                <PersonalModal person={person} handlemodal={() => setIsOpen(false)} />
            </div>
            <div
                onClick={() => setIsOpen(true)}
                className="relative p-2">
                <div className="border border-secondary bg-secondary rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer group   ">
                    <div className='grid gap-4 mb-1 md:flex'>
                        <Image className='w-full md:w-64 rounded' placeholder='blur' loading="lazy" blurDataURL="data:image/jpeg..." width={400} height={200} src={person.image!} alt={person.name} />
                        {
                            person.speech && <p className='text-md p-4 bg-background text-text '>{person.speech}</p>
                        }
                    </div>
                    <div className='  w-full overflow-hidden  p-4 '>
                        <h3 className="text-xl font-semibold text-primary">{person.name}</h3>
                        <p className="text-gray-600 text-text/70">{person.role}</p>
                        <p className="text-gray-600 text-text/70 flex items-center gap-2"> <FaUserGraduate />
                            {person.education}</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PersonCard;