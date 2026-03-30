import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    
      <footer className="bg-base-300 text-base-content border-t m-0 border-base-200">

        {/* Top Accent Line */}

        <div className="h-1 w-full bg-linear-to-r from-primary via-secondary to-accent"></div>

        <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div className="space-y-4">

            <h2 className="font-bold text-4xl tracking-tight">
              <span className="text-accent drop-shadow-sm">Fin</span>
              <span className="text-primary">Ease</span>
            </h2>

            <p className="text-base-content/70 leading-relaxed">
              Your all-in-one personal finance manager. Track smarter,
              save better and take control of your money.
            </p>

            {/* Social icons */}

            <div className="flex gap-3 mt-4">

              <a href="https://www.facebook.com/mdalamin.510400/" target="_blank" className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white transition">
                <FaFacebook />
              </a>

              <a href="https://x.com/md_al_amin3799" target="_blank" className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white transition">
                <FaTwitter />
              </a>

              <a href="https://github.com/Al-Amin018555" target="_blank" className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white transition">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/md-al-amin-475792358/" target="_blank" className="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-white transition">
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h6 className="footer-title text-primary">Product</h6>

            <div className="flex flex-col gap-2">

              <Link to="/" className="link link-hover hover:text-primary">
                Home
              </Link>

              <Link to="/add-transaction" className="link link-hover hover:text-primary">
                Add Transaction
              </Link>

              <Link to="/my-transactions" className="link link-hover hover:text-primary">
                My Transactions
              </Link>

              <Link to="/reports" className="link link-hover hover:text-primary">
                Reports
              </Link>

            </div>

          </div>

          {/* Account */}

          <div>

            <h6 className="footer-title text-primary">Account</h6>

            <div className="flex flex-col gap-2">

              <Link to='/login' className="link link-hover hover:text-primary">
                Login
              </Link>

              <Link to='/register' className="link link-hover hover:text-primary">
                Sign Up
              </Link>

              <Link to='/my-profile' className="link link-hover hover:text-primary">
                My Profile
              </Link>

            </div>

          </div>

          {/* Support */}

          <div>

            <h6 className="footer-title text-primary">Support</h6>

            <div className="flex flex-col gap-2">

              <Link to='/privacy-policy' className="link link-hover hover:text-primary">
                Privacy Policy
              </Link>

              <Link to="/terms-of-service" className="link link-hover hover:text-primary">
                Terms of Service
              </Link>

              <Link to="/contact" className="link link-hover hover:text-primary">
                Contact
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom bar */}

        <div>

          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">

            <p className="text-sm text-base-content/70">
              © {new Date().getFullYear()} FinEase — All rights reserved
            </p>

            <div className="flex gap-6 text-sm">

              <a className="hover:text-primary cursor-pointer">
                Privacy
              </a>

              <a className="hover:text-primary cursor-pointer">
                Terms
              </a>

              <a className="hover:text-primary cursor-pointer">
                Support
              </a>

            </div>

          </div>

        </div>

      </footer>
    
  );
};

export default Footer;