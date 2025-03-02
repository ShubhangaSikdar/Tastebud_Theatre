
"use client";

import { useState } from "react";
import SearchBar from "../admin/components/SearchBar";
import AdminSideBar from "../admin/components/AdminSideBar";

const AdminLayout = ({ children }) => {
  const [movies] = useState([
    { title: "Inception" },
    { title: "Interstellar" },
    { title: "The Dark Knight" },
    { title: "Avengers: Endgame" },
    { title: "Captain America" },
  ]);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredMovies([]);
      return;
    }

    const matches = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredMovies(matches);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Search Results (aligned with search bar) */}
        {searchQuery && (
          <div className="mt-2 max-w-xl mx-auto bg-white shadow-md rounded-lg p-4">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie, index) => (
                <div key={index} className="p-2 border-b last:border-none">
                  {movie.title}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No movie found.</p>
            )}
          </div>
        )}

        {/* Other Admin Content */}
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
