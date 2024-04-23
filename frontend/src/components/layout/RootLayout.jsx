import Navbar from "../core/navbar/Navbar";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
