"use client";

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
