import Image from 'next/image';
import React from 'react';

interface StarProps {
    count: number;
}

const StarRating: React.FC<StarProps> = ({ count }) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            {/* Five stars */}
            {[...Array(count)].map((_, index) => (
                <Image key={index}
                    src={`/star.svg`}
                    width={20}
                    height={20}
                    alt={`Picture of the star ${index + 1}`} />
            ))}
        </div>
    );
};

export default StarRating;
