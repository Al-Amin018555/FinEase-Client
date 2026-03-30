import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import FinancialStats from "../FinancialStats/FinancialStats";
const Banner = () => {
    return (
        <div className="bg-primary text-primary-content w-full px-12 py-16 md:px-24 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left — Text */}
                <div className="space-y-6">
                    <p className="text-5xl md:text-6xl font-bold leading-tight">
                        Take <br />
                        <span className="text-accent">Control</span> of <br />
                        Your Financial <br />
                        Future
                    </p>
                    <p className="text-lg text-primary-content/70 leading-relaxed max-w-md">
                        Track income, manage expenses, and hit your savings goals — all in one beautifully designed dashboard built for clarity
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <Link to="/add-transaction">
                            <button className="btn bg-accent text-accent-content border-none font-bold flex items-center gap-2">
                                <span>Start Tracking</span>
                                <FaArrowRight className="translate-y-px" />
                            </button>
                        </Link>
                        <Link to="/reports">
                            <button className="btn btn-outline hover:bg-accent hover:text-accent-content hover:font-bold hover:border-0">
                                View Reports
                            </button>
                        </Link>
                    </div>
            </div>

                {/* Right — Stats */}
                <FinancialStats />

            </div>
        </div>
    );
};

export default Banner;