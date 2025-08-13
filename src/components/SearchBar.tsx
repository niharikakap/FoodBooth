import React, { useState } from 'react';
import SearchForm from './SearchForm';

// Accessible and reusable search bar component
const SearchBar: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-4 px-4">
      {/* Compact summary bar */}
      <div className="flex items-center justify-between bg-white shadow rounded-lg p-3">
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <span>Frankfurt Airport</span>
          <span>|</span>
          <span>15 Jul 2025, 11:30 AM</span>
          <span>|</span>
          <span>20 Jul 2025, 12:00 PM</span>
        </div>
        <button
          type="button"
          onClick={handleToggleEdit}
          className="ml-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-expanded={isEditing}
          aria-controls="search-form-overlay"
          aria-label={isEditing ? 'Close edit search form' : 'Edit search parameters'}
        >
          ✎
        </button>
      </div>

      {/* Overlay form */}
      {isEditing && (
        <div
          id="search-form-overlay"
          className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-10"
        >
          <SearchForm onClose={() => setIsEditing(false)} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;