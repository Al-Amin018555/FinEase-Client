import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">

      <Header />

      {/* This takes remaining space */}
      <main className="flex-1">
        <Outlet />
      </main>
      <div>
        <Footer />

      </div>

    </div>
  );
};

export default MainLayout;