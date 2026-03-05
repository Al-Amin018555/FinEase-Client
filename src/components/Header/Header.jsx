import { Link } from "react-router";
import useAuth from "../../hooks/UseAuth";
import { useEffect, useState } from "react";

const Header = () => {
    const { user, logOut } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const links = <>
        <li><Link to="/">Home</Link></li>
        {
            user && <>
                <li><Link to="/add-transaction">Add Transaction</Link></li>
                <li><Link to="/my-transactions">My Trasaction</Link></li>
                <li><Link to="/reports">Reports</Link></li>
            </>
        }
    </>
    return (
        <nav className={`navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-md transition-all duration-300 ${isScrolled ? "shadow-md" : ""
            }`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <a className="text-base-content font-bold text-4xl"><span className="text-accent">Fin</span>Ease</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
                user ? <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>{user.displayName}</a></li>
                            <li><a onClick={() => logOut()}>Logout</a></li>
                        </ul>
                    </div>
                </div>
                    : <div className="navbar-end space-x-2">
                        <Link to='/login' className="btn btn-outline btn-primary">Login</Link>
                        <Link to='/register' className="btn btn-primary">Signup</Link>
                    </div>
            }
        </nav>
    );
};

export default Header;