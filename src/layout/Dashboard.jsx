import { Outlet } from "react-router";
import UserNav from "../shear/UserNav";
import AdminNav from "../shear/AdminNav";

const Dashboard = () => {
  const admin=true;
  return (
    <div className="flex min-h-screen">
      {/* Sidebar with fixed width */}
      <div className="w-[30px] md:w-64">
       {admin?<AdminNav/>: <UserNav />}
      </div>

      {/* Main content area, take remaining space */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

