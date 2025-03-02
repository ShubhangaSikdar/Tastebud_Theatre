




import DashboardStats from "./components/DashboardStats";
import PopularMovies from "./components/PopularMovies";
import SearchBar from "./components/SearchBar";
import StatsCard from "./components/StatsCard";
import TrendingGenres from "./components/TrendingGenres";

export default function AdminHomePage() {
    return (
        <div className="space-y-10 mt-12"> {/* Added mt-12 class here */}
            {/* Header Section */}
            <div className="bg-gradient-to-r from-red-600 to-blue-800 rounded-xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
                {/* Left Side Content */}
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        Your Ultimate Movie Universe Awaits
                    </h1>
                    <p className="mt-4 text-base sm:text-lg opacity-90">
                        Discover a world of entertainment with our extensive collection of movies. 
                        Enjoy high-quality streaming anytime, anywhere!
                    </p>
                    <button className="mt-6 px-6 py-3 border-2 border-white rounded-full text-base sm:text-lg font-semibold transition-all hover:bg-white hover:text-blue-900 shadow-md">
                        🎬 Exclusive On <span className="text-amber-500">Tastebud Theatre</span>
                    </button>
                </div>
                
                {/* Right Side Image */}
                <div className="w-40 sm:w-52 md:w-72 mt-6 md:mt-0">
                    <img 
                        src="/assets/logo.png"
                        alt="Movie Clapper" 
                        className="w-full drop-shadow-lg"
                    />
                </div>
            </div>

            {/*
            <TrendingGenres />            
            <PopularMovies />
            <StatsCard />
            <DashboardStats />
            */}
            {/* <SearchBar /> */}
        </div>
    );
}