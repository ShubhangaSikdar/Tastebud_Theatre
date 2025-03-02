"use client"
import { useEffect, useState } from "react";

export default function PopularMovies() {
    const [movies, setMovies] = useState([]);  // Ensure default value is an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                // Replace with your actual API or data-fetching logic
                const response = await fetch("/api/popularMovies");
                const data = await response.json();
                setMovies(data || []);  // Ensure fallback to an empty array
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, []);

    if (loading) return <p>Loading popular movies...</p>;
    if (!movies.length) return <p>No popular movies available.</p>;  // Handle empty data

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">🎬 Popular Movies</h2>
            <ul className="space-y-2">
                {movies.map((movie, index) => (
                    <li key={index} className="text-gray-700">
                        {movie.title} ({movie.views} views)
                    </li>
                ))}
            </ul>
        </div>
    );
}
