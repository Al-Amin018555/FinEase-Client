import Banner from "../components/Banner/Banner";
import BudgetTips from "../components/BudgetTips/BudgetTips";
import useTitle from "../hooks/useTitle";

const Home = () => {
    useTitle("Home | FinEase")
    return (
        <div>
            <Banner></Banner>
            <div className="p-5">
                <BudgetTips></BudgetTips>
            </div>
        </div>
    );
};

export default Home;