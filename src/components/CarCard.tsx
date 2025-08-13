import React from 'react';
import Image from 'next/image';

interface CarCardProps {
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
  rating?: number;
}

const CarCard: React.FC<CarCardProps> = ({ title, subtitle, price, imageUrl, rating = 4 }) => {
  return (
    <article className="relative rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 focus-within:-translate-y-1">
      <Image src={imageUrl} alt={title} width={400} height={250} className="object-cover w-full h-56" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white font-semibold text-lg leading-5">{title}</h3>
        <p className="text-gray-200 text-xs mb-2">{subtitle}</p>
        <div className="flex items-center text-yellow-400 text-xs mb-1" aria-label={`Rating ${rating} out of 5`}>★ {rating} · Highly Rated</div>
        <span className="text-white font-bold text-xl">AED {price.toFixed(2)}/day</span>
      </div>
    </article>
  );
};

export default CarCard;