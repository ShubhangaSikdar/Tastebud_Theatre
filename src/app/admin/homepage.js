export default function AdminHomePage() {
    return (
        <div className="bg-gradient-to-r from-red-600 to-blue-800 rounded-xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
            {/* Left Side Content */}
            <div className="max-w-lg">
                <h1 className="text-5xl font-extrabold leading-tight">Your Ultimate Movie Universe Awaits</h1>
                <p className="mt-4 text-lg opacity-90">
                    Discover a world of entertainment with our extensive collection of movies. 
                    Enjoy high-quality streaming anytime, anywhere!
                </p>
                <button className="mt-6 px-6 py-3 border-2 border-white rounded-full text-lg font-semibold transition-all hover:bg-white hover:text-blue-900 shadow-md">
                    🎬 Exclusive On <span className="text-amber-500">Tastebud Theatre</span>
                </button>
            </div>

            <div className="w-60 md:w-72">
                <img 
                    src="./assets/logo.png"
                    alt="Movie Clapper" 
                    className="w-full drop-shadow-lg"
                />
            </div>
        </div>
    );
}


// "use client";
// import { useState } from 'react';
// import Image from 'next/image';

// export default function AdminHomePage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Header with Menu Button */}
//       <header className="p-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <Image
//             src="/assets/logo.png"
//             alt="Logo"
//             width={40}
//             height={40}
//             className="mr-2"
//           />
//           <span className="font-bold text-xl">Tastebud Theatre</span>
//         </div>

//         {/* Menu Button (Visible on Small Screens) */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6 fill-current"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isMenuOpen ? (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.829z"
//               />
//             ) : (
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Admin Panel Button (Visible on Larger Screens) */}
//         <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
//           Admin Panel
//         </button>
//       </header>

//       {/* Responsive Content */}
//       <div className="container mx-auto p-4 flex flex-col md:flex-row">
//         {/* Menu (Visible on Small Screens when isMenuOpen is true) */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 space-y-2 w-full md:w-1/4">
//             <button className="block w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
//               Dashboard
//             </button>
//             <button className="block w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
//               Movies
//             </button>
//             {/* Add more menu items here */}
//           </div>
//         )}

//         {/* Main Content */}
//         <div className={`w-full md:w-${isMenuOpen ? '3/4' : 'full'} md:pl-4`}>
//           <div className="bg-gradient-to-r from-red-600 to-blue-800 rounded-xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
//             {/* Left Side Content */}
//             <div className="max-w-lg mb-6 md:mb-0 text-center md:text-left">
//               <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//                 Your Ultimate Movie Universe Awaits
//               </h1>
//               <p className="mt-4 text-lg opacity-90">
//                 Discover a world of entertainment with our extensive collection of movies. Enjoy
//                 high-quality streaming anytime, anywhere!
//               </p>
//               <button className="mt-6 px-6 py-3 border-2 border-white rounded-full text-lg font-semibold transition-all hover:bg-white hover:text-blue-900 shadow-md">
//                 🎬 Exclusive On <span className="text-amber-500">Tastebud Theatre</span>
//               </button>
//             </div>

//             {/* Right Side Image */}
//             <div className="w-60 md:w-72 mx-auto md:mx-0">
//               <Image
//                 src="/assets/logo.png"
//                 alt="Movie Clapper"
//                 width={300} // Adjust width as needed
//                 height={300} // Adjust height as needed
//                 className="w-full drop-shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }