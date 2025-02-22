import AdminSideBar from "./components/AdminSideBar";
import AdminHomePage from "./homepage";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AdminSideBar />
      <main className="flex-1 p-6">
        <AdminHomePage />
      </main>
    </div>
  );
}
