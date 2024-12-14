import React from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  name: string;
  image: string;
}

export const PackageImage: React.FC<ImageGalleryProps> = ({ name, image }) => {
  return (
    // <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
    //   {image.map((src, index) => (
    //     <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    //       <Image
    //         src={src}
    //         alt={`Package image ${index + 1}`}
    //         layout="fill"
    //         objectFit="cover"
    //         className="hover:scale-105 transition-transform duration-300"
    //       />
    //     </div>
    //   ))}
    // </div>
    <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
      <div className='absolute z-10 inset-0 bg-gradient-to-br from-transparent via-transparent to-black pointer-events-none' />
      <Image
        src={image}
        alt={`Package image ${image || ""}`}
        fill={true}
        objectFit="cover"
        className="hover:scale-105 transition-transform duration-500"
      />
      <div className='absolute text-white z-10 text-sm bottom-2 right-3'>
        {name}
      </div>
    </div>
  );
};

