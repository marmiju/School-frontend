import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
    // Define any props you need for the ImageCard component
    imageUrl?: string;
    title?: string;
    subTitle?: string;

}

const ImageCard = ({imageUrl,title,subTitle}:ImageCardProps) => {
    return (
        <div>
            <Image
                src={imageUrl || '/default-image.jpg'} // Provide a default image if none is passed
                alt={title || 'Image Card'}
                width={200}
                height={200}
                className="w-full h-auto rounded-lg shadow-md"/>
            <p>{title}</p>
            <p>{subTitle!}</p>
        </div>
    );
};

export default ImageCard;