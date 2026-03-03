import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Loader from "../components/Header/Loader";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;