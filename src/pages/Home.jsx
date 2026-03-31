import Banner from "../components/Banner/Banner";
import BudgetTips from "../components/BudgetTips/BudgetTips";
import useTitle from "../hooks/useTitle";

const Home = () => {
    useTitle("Home | FinEase")
    return (
        <div>
            <Banner></Banner>
            <BudgetTips></BudgetTips>
        </div>
    );
};

export default Home;