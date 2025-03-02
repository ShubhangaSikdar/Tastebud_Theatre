// src/app/admin/components/DashboardStats.js

"use client"
import StatsCard from "./StatsCard";
import { useEffect, useState } from "react";

const DashboardStats = () => {
  const [stats, setStats] = useState({
    totalMovies: 0,
    totalCategories: 0,
    totalGenres: 0,
    highestRatedMovie: "N/A",
    trendingGenre: "N/A",
  });

  useEffect(() => {
    // Fetch Admin Data (Movies, Categories, Genres)
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats((prev) => ({
          ...prev,
          totalMovies: data.totalMovies,
          totalCategories: data.totalCategories,
          totalGenres: data.totalGenres,
        }));
      });

    // Fetch User Data (Trending Genre, Highest Rated Movie)
    fetch("/api/user/trends")
      .then((res) => res.json())
      .then((data) => {
        setStats((prev) => ({
          ...prev,
          highestRatedMovie: data.highestRatedMovie || "N/A",
          trendingGenre: data.trendingGenre || "N/A",
        }));
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <StatsCard icon="🎬" title="Total Movies" value={stats.totalMovies} />
      <StatsCard icon="📂" title="Total Categories" value={stats.totalCategories} />
      <StatsCard icon="🎭" title="Total Genres" value={stats.totalGenres} />
      <StatsCard icon="🌟" title="Highest Rated Movie" value={stats.highestRatedMovie} />
      <StatsCard icon="🔥" title="Trending Genre" value={stats.trendingGenre} />
    </div>
  );
};

export default DashboardStats;

