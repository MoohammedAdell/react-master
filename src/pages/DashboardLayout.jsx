import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <h1>Dashboard</h1>



      <Outlet />
    </>
  );
}

export default DashboardLayout;
