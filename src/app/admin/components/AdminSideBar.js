// src/app/admin/components/AdminSideBar.js
import Link from "next/link";

export default function AdminSideBar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link href="/admin">
            <span className="hover:underline cursor-pointer">Dashboard</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/movies">
            <span className="hover:underline cursor-pointer">Movies</span>
          </Link>
        </li>
        
      </ul>
    </aside>
  );
}
