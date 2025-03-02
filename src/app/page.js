"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPassKey, setShowPassKey] = useState(false);
  const [passKey, setPassKey] = useState("");
  const [showInvalidPassKeyDialog, setShowInvalidPassKeyDialog] =
    useState(false);
  const router = useRouter();
  const ADMIN_PASS_KEY = "A1B2C3D4E5";

  const handleLogin = () => {
    setShowLogin(false);
    setShowPassKey(true);
  };

  const handlePassKeySubmit = () => {
    if (passKey === ADMIN_PASS_KEY) {
      router.push("/admin");
    } else {
      setShowInvalidPassKeyDialog(true);
    }
  };

  const closeInvalidPassKeyDialog = () => {
    setShowInvalidPassKeyDialog(false);
    setShowPassKey(false); // Close the pass key dialog as well
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-600 to-blue-950 text-white">
      {/* Logo & Title */}
      <div className="flex flex-col items-center mb-6">
        <Image src="/assets/logo.png" alt="Logo" width={200} height={200} />
        <h1 className="text-4xl font-extrabold mt-3 text-blue-400">
          Tastebud Theatre
        </h1>
      </div>

      {/* Description */}
      <p className="mt-3 text-gray-300 text-lg text-center max-w-md">
        Your gateway to unlimited entertainment!!! <br /> One stop solution for
        your movie night confusions.
        <br />
        🎬 Enjoy your favorite movies, explore new genres, and experience
        seamless movie management with our platform.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-6">
        <div className="relative group">
          <Button
            onClick={() => setShowLogin(true)}
            className="transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700"
          >
            Admin
          </Button>
          <span className="absolute whitespace-nowrap top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-sm text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            For Admin Use Only
          </span>
        </div>

        <div className="relative group">
          <Button
            onClick={() => router.push("/user")}
            className="transition duration-300 ease-in-out transform hover:scale-110 bg-emerald-600"
          >
            User
          </Button>
          <span className="absolute whitespace-nowrap top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-sm text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            For User Use
          </span>
        </div>
      </div>

      {/* Admin Login Dialog (Using div instead of dialog) */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-2xl max-w-md w-full relative animate-fadeIn">
            {/* Close Button (Top Right) */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Admin Login
            </h2>

            {/* Input Fields */}
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border rounded-lg bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="mt-5 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-800 transition duration-300 shadow-md"
            >
              Login
            </button>

            {/* Close Button (Only One) */}
            <button
              onClick={() => setShowLogin(false)}
              className="mt-3 w-full py-3 rounded-lg bg-red-600 text-white font-semibold text-lg hover:bg-red-800 transition duration-300 shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Pass Key Dialog (Using div instead of dialog) */}
      {showPassKey && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-5 bg-white rounded-lg shadow-2xl max-w-md w-full relative animate-fadeIn">
            <h2 className="text-lg font-bold text-center text-gray-800">
              Enter Admin Pass Key
            </h2>
            <input
              type="text"
              value={passKey}
              onChange={(e) => setPassKey(e.target.value)}
              className="mt-3 w-full p-3 border rounded-lg bg-gray-100 text-black focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <Button
              className="mt-4 w-full bg-green-500 text-white font-semibold text-lg hover:bg-green-600 transition duration-300 shadow-md"
              onClick={handlePassKeySubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      )}

      {/* Invalid Pass Key Dialog */}
      {showInvalidPassKeyDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-2xl max-w-md w-full relative animate-fadeIn">
            <h2 className="text-lg font-bold text-center text-red-600">
              Invalid Pass Key!!
            </h2>
            <p className="text-center mt-2">Not an admin.</p>
            <Button
              className="mt-4 w-full bg-red-500 text-white font-semibold text-lg hover:bg-red-600 transition duration-300 shadow-md"
              onClick={closeInvalidPassKeyDialog}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
