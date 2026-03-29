import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
    return (
        <div>
            <div className="bg-primary text-primary-content max-h-175 border p-12 md:p-24">
                <div className="hero-content text-center mx-auto max-w-7xl">
                    <div className="text-left space-y-4">
                        {/* <h1 className="text-5xl font-bold">Hello there</h1> */}
                        <p className="py-6 text-6xl font-bold">
                            Take <br />
                            <span className="text-accent">Control</span> of <br />
                            Your <br />
                            Financial <br />
                            Future
                        </p>
                        <p className="text-2xl text-primary-content/80">
                            Track income, manage expenses, and hit your savings goals — all in one beautifully designed dashboard built for clarity
                        </p>
                        <div className="flex gap-2">
                            <Link to="/add-transaction">
                            <button className="btn bg-accent text-accent-content border-none font-bold btn-primary flex items-center gap-2">
                                <span>Start Tracking</span>
                                <FaArrowRight className="translate-y-px" />
                            </button>   
                        </Link>
                        <Link to="/reports">
                            <button className="btn btn-outline hover:bg-accent hover:text-accent-content hover:font-bold hover:border-0">
                                <span>View Reports</span>
                                
                            </button>   
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;