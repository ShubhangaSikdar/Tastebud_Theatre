

"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, FilmIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button (Visible only when sidebar is closed) */}
      {!isOpen && (
        <div className="md:hidden p-4 fixed top-0 left-0 z-50">
          <button onClick={toggleSidebar} className="focus:outline-none p-2 rounded-md bg-blue-500 text-white shadow-md">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:sticky top-0 left-0 w-64 h-screen bg-blue-700 text-white p-4 transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Cross Symbol (Visible only when sidebar is open on mobile) */}
        {isOpen && (
          <div className="md:hidden absolute top-4 right-4 cursor-pointer" onClick={toggleSidebar}>
            <XMarkIcon className="h-6 w-6" />
          </div>
        )}

        <div className="mt-8 flex items-center justify-center">
          <Link href="/admin"> 
            <Image src="/assets/logo.png" alt="Logo" width={70} height={100} />
          </Link>
        </div>

        <nav className="mt-4">
          <ul>
            <li className="mb-2">
              <Link href="/admin/movies" className="block py-2 px-4 hover:bg-blue-900 rounded flex items-center">
                <FilmIcon className="h-5 w-5 mr-2" />
                Movies
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/admin/add-movie" className="block py-2 px-4 hover:bg-blue-900 rounded flex items-center">
                <PlusCircleIcon className="h-5 w-5 mr-2" />
                Add Movie
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </aside>

      {/* Overlay to Prevent Interaction with Content When Sidebar is Open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Spacer to Push Content Away When Sidebar is Open */}
      {isOpen && (
        <div className="md:hidden w-64 h-screen"></div>
      )}
    </>
  );
}