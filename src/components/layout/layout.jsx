import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../../index";

export function Layout() {
  return (
    <div>
      <NavBar />
      <main style={{ paddingTop: "80px" }}> 
        <Outlet />  
      </main>
      <Footer />
    </div>
  );
}
