import React from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard';

const cars = [
  {
    title: 'MERCEDES CLD250',
    subtitle: 'Premium Sedan',
    price: 525,
    imageUrl: 'https://source.unsplash.com/random/400x250?mercedes',
  },
  {
    title: 'MERCEDES MAYBACH',
    subtitle: 'Premium Luxury Sedan',
    price: 425,
    imageUrl: 'https://source.unsplash.com/random/400x250?mercedes%20maybach',
  },
  {
    title: 'PORSCHE CAYMAN',
    subtitle: 'Premium Hatchback',
    price: 485,
    imageUrl: 'https://source.unsplash.com/random/400x250?porsche',
  },
  {
    title: 'ASTON MARTIN VANTAGE',
    subtitle: 'Premium hatchback supercar',
    price: 525,
    imageUrl: 'https://source.unsplash.com/random/400x250?aston%20martin',
  },
  {
    title: 'BMW M8 COMPETITION CONVERTIBLE',
    subtitle: 'Premium hatchback supercar',
    price: 425,
    imageUrl: 'https://source.unsplash.com/random/400x250?bmw%20m8',
  },
  {
    title: 'G WAGON 2013',
    subtitle: 'Premium Luxury SUV',
    price: 425,
    imageUrl: 'https://source.unsplash.com/random/400x250?g%20wagon',
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Car Rental</title>
        <meta name="description" content="Car rental search and booking" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-gray-900 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Company Logo</h1>
            <nav className="space-x-8 hidden md:block">
              <a href="#" className="hover:underline">My Requests</a>
              <a href="#" className="hover:underline">Bookings</a>
              <a href="#" className="hover:underline">About</a>
            </nav>
          </div>
        </header>

        <SearchBar />

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto p-4 mt-6">
          {cars.map((car) => (
            <CarCard key={car.title} {...car} />
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;