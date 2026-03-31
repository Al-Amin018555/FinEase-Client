import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <ScrollToTop></ScrollToTop>
      <Header />
      <main className="flex-1 bg-base-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;