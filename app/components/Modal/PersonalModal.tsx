import React from 'react';
import { MdClose } from 'react-icons/md';
import ImageCard from '../Card/ImageCard';
import { Person } from '@/lib/administration/Administration';
import ListCard from '../Card/ListCard';


const PersonalModal = ({person, handlemodal}:{person:Person, handlemodal:()=>void}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-secondary/20 backdrop-blur-3xl p-6 rounded-lg shadow-sm">
                 
                <div className='grid md:flex gap-4'>
                   <ImageCard imageUrl={person.image!}  title={person.name} subTitle={person.education}/>
                   <ListCard person={person}/>

                </div>
                <MdClose 
                 onClick={handlemodal}
                 className='text-red-600 bg-secondary m-2 text-2xl hover:cursor-pointer w-full '/>
            </div>
        </div>

    );
};

export default PersonalModal;