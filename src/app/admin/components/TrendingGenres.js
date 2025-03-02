"use client"
import { useEffect, useState } from "react";

export default function TrendingGenres() {
    const [genres, setGenres] = useState([]);  // Ensure default value is an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGenres() {
            try {
                // Replace with your API or data-fetching logic
                const response = await fetch("/api/trending-genres"); 
                const data = await response.json();
                setGenres(data || []);  // Ensure fallback to an empty array
            } catch (error) {
                console.error("Error fetching trending genres:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchGenres();
    }, []);

    if (loading) return <p>Loading trending genres...</p>;
    if (!genres.length) return <p>No trending genres available.</p>;  // Handle empty data

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">🔥 Trending Genres</h2>
            <ul className="space-y-2">
                {genres.map((genre, index) => (
                    <li key={index} className="text-gray-700">
                        {genre.name} ({genre.count} movies)
                    </li>
                ))}
            </ul>
        </div>
    );
}
