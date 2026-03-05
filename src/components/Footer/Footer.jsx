import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-base-200 text-base-content">
            <footer className="footer sm:footer-horizontal max-w-7xl mx-auto p-10">
                <aside>
                    <h2 className="font-bold text-4xl"><span className="text-accent">Fin</span>Ease</h2>
                    <p>
                        Your all-in-one personal finance <br />manager. Track smarter, save better, <br />live freer
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/add-transaction' className="link link-hover">Add Transaction</Link>
                    <Link to='/my-transactions' className="link link-hover">My Transaction</Link>
                    <Link to='/reports' className="link link-hover">Reports</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Account</h6>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">Sign Up</a>
                    <a className="link link-hover">My Profile</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
            </footer>
            <div>
                <p className="text-center bg-base-200 text-base-content p-2">Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;