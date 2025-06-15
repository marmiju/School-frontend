import { Person } from '@/lib/administration/Administration';
import React from 'react';

const ListCard = ({person}:{person:Person}) => {
    return (
        <div className=' p-2 rounded-lg bg-secondary/20 backdrop-blur-2xl text-text transition-shadow duration-300'>
            <p className=' px-4 py-2'>{`নামঃ ${person.name}`}</p>
            {person.subjects && <p className=' px-4 py-2'>{`পদবিঃ ${person.subjects}`}</p>}
            <p className=' px-4 py-2'>{`যোগদানের তারিখঃ  ${person.joinDate}`}</p>
            <p className=' px-4 py-2'>{`ঠিকানাঃ ${person.address}`}</p>
            <p className=' px-4 py-2'>{`শিক্ষাগত যোগ্যতাঃ ${person.education}`}</p>
            <p className=' px-4 py-2'>{`জন্মতারিখঃ ${person.birthDate}`}</p>
            <p className=' px-4 py-2'>{`রক্তের গ্রুপঃ ${person.bloodGroup}`}</p>
            <p className=' px-4 py-2'>{`ধর্মঃ ${person.religion}`}</p>
            <p className=' px-4 py-2'>{`ফোনঃ  ${person.phone}`}</p>
            <p className=' px-4 py-2'>{`ইমেইলঃ ${person.email}`}</p>
        </div>
    );
};

export default ListCard;