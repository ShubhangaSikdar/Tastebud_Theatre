
"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    poster: "",
    title: "",
    storyline: "",
    duration: "",
    year: "",
    link: "",
    language: [],
    titleCategory: "",
    genre: [],
    songs: "",
    cast: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setMovieData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setMovieData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { poster, title, storyline, duration, year, link, titleCategory, genre, songs, cast } = movieData;

    if (!poster || !title || !storyline || !duration || !year || !link || !titleCategory || genre.length === 0 || !songs || !cast) {
      toast.error("All fields are required!");
      return;
    }

    // ✅ Format Crew as a Comma-Separated List
    const formattedCast = cast.split("\n").map((item) => item.trim()).join(", ");

    // ✅ Format Songs as "Song - Singer" separated by new lines
    const formattedSongs = songs.split("\n").map((item) => {
      const [song, singer] = item.split("-").map((str) => str.trim());
      return `${song} - ${singer}`;
    }).join("\n");

    console.log({
      ...movieData,
      cast: formattedCast,
      songs: formattedSongs,
    });

    toast.success("Movie added successfully!");
  };

  return (
    <div className="p-6 text-black min-h-screen mt-12">
      <div className="flex items-center mb-6">
        <div className="flex-grow text-black">
          <h1 className="text-3xl font-bold">Add Movie</h1>
          <p className="text-lg">Admin Panel</p>
        </div>
        
      </div>

      <div className="w-full max-w-4xl bg-gray-200 p-8 rounded-lg shadow-lg mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Poster */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Poster URL</label>
            <input type="text" name="poster" placeholder="Poster URL" className="input-field" onChange={handleChange} />
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" placeholder="Title" className="input-field" onChange={handleChange} />
          </div>

          {/* Storyline */}
          <div className="md:col-span-2 flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Storyline</label>
            <textarea name="storyline" placeholder="Storyline" className="input-field md:col-span-2" onChange={handleChange}></textarea>
          </div>

          {/* Duration */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <input type="text" name="duration" placeholder="Duration" className="input-field" onChange={handleChange} />
          </div>

          {/* Year */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <input type="text" name="year" placeholder="Year" className="input-field" onChange={handleChange} />
          </div>

          {/* Movie Link */}
          <div className="md:col-span-2 flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Movie Link</label>
            <input type="text" name="link" placeholder="Movie Link" className="input-field md:col-span-2" onChange={handleChange} />
          </div>

          {/* Title Category */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">Title Category:</label>
            <div className="flex flex-wrap gap-4">
              {["Movies", "Series", "Shows"].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input type="radio" name="titleCategory" value={item} onChange={handleChange} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Crew & Songs */}
          <div className="md:col-span-2 flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Crews</label>
            <textarea name="cast" placeholder="Enter each name on a new line (e.g., Tom Hanks - Actor\nChristopher Nolan - Director)" className="input-field md:col-span-2" onChange={handleChange}></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="block text-sm font-medium text-gray-700">Songs of the Movie</label>
            <textarea name="songs" placeholder="Enter in 'Song - Singer' format, one per line" className="input-field md:col-span-2" onChange={handleChange}></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="md:col-span-2 bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-800 transition">
            Add Movie
          </button>
        </form>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
};

// Tailwind CSS for input field styling
const inputField = "w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-black placeholder-gray-400 focus:ring-2 focus:ring-yellow-400";

export default AddMovie;
