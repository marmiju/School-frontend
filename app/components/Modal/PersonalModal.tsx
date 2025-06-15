import React from 'react';
import { FcCloseUpMode } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import ImageCard from '../Card/ImageCard';
import { Person } from '@/lib/administration/Administration';


const PersonalModal = ({person, handlemodal}:{person:Person, handlemodal:()=>void}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                 <MdClose 
                 onClick={handlemodal}
                 className='text-red-600 bg-secondary m-2 text-2xl'/>
                <div className='flex md:grid'>
                   <ImageCard imageUrl={person.image!}  title={person.name} subTitle={person.education}/>

                </div>
            </div>
        </div>

    );
};

export default PersonalModal;