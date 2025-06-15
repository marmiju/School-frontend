import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
    imageUrl?: string;
    title?: string;
    subTitle?: string;

}

const ImageCard = ({imageUrl,title,subTitle}:ImageCardProps) => {
    return (
        <div className='space-y-2'>
            <Image
                src={imageUrl || '/default-image.jpg'} // Provide a default image if none is passed
                alt={title || 'Image Card'}
                width={200}
                height={200}
                className="w-full h-auto rounded-lg shadow-md"/>
            <p className='text-2xl text-primary'>{title}</p>
            <p className='text-text/80'>{subTitle!}</p>
        </div>
    );
};

export default ImageCard;