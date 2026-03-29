import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">

      <Header />

      {/* This takes remaining space */}
      <main className="grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;