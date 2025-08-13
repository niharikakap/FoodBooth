import React from 'react';

interface SearchFormProps {
  onClose?: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onClose }) => {
  const handleBookNow = () => {
    // Normally you would validate and maybe navigate to a booking page here
    // For now we just close the form to mimic the Book Now action
    if (onClose) onClose();
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4" aria-label="Search form">
      <div className="flex flex-col">
        <label htmlFor="pickup" className="text-xs font-medium text-gray-600">
          Pick Up Address
        </label>
        <input
          id="pickup"
          name="pickup"
          type="text"
          defaultValue="Frankfurt Airport"
          className="mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="dropoff" className="text-xs font-medium text-gray-600">
          Drop Off Address
        </label>
        <input
          id="dropoff"
          name="dropoff"
          type="text"
          defaultValue="Diagonal Street Square"
          className="mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="pickupDate" className="text-xs font-medium text-gray-600">
          Pick Up Date
        </label>
        <input
          id="pickupDate"
          name="pickupDate"
          type="date"
          defaultValue="2025-07-15"
          className="mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="pickupTime" className="text-xs font-medium text-gray-600">
          Pick Up Time
        </label>
        <input
          id="pickupTime"
          name="pickupTime"
          type="time"
          defaultValue="11:30"
          className="mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex items-end">
        <button
          type="button"
          onClick={handleBookNow}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default SearchForm;