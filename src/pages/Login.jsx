import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const { logIn, googleLogIn } = useAuth();
    useTitle("Login | FinEase");

    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(() => {
                const from = location.state?.from || "/";
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                });
            });
    };

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(() => {
                const from = location.state?.from || "/";
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Google Login Failed",
                    text: error.message,
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-base-200 to-base-300 px-4">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div className="text-center lg:text-left space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-base-content leading-tight">
                        Stay in Control of Your Money
                    </h1>

                    <p className="text-base lg:text-lg text-base-content/70">
                        Your financial journey continues here. <br />
                        Track, plan, and grow your wealth with{" "}
                        <span className="text-primary font-semibold">FinEase</span>.
                    </p>

                    <div className="hidden lg:block text-sm text-base-content/60 mt-6">
                        Manage income • Track expenses • Achieve financial freedom
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full max-w-sm mx-auto">
                    <div className="card bg-base-100 shadow-2xl rounded-2xl border border-base-300">
                        <div className="card-body space-y-4">

                            <h2 className="text-2xl font-bold text-center">
                                Welcome Back
                            </h2>

                            <p className="text-center text-sm text-base-content/60">
                                Login to continue your journey
                            </p>

                            {/* Form */}
                            <form onSubmit={handleLogin} className="space-y-4">

                                {/* Email */}
                                <div>
                                    <label className="label text-sm">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input input-bordered w-full focus:input-primary"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                {/* Password with Toggle */}
                                <div>
                                    <label className="label text-sm">Password</label>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            className="input input-bordered w-full focus:input-primary pr-10"
                                            placeholder="Enter your password"
                                            required
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-base-content/60 hover:text-primary"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex justify-between text-sm">
                                    <a className="link link-hover text-primary">
                                        Forgot password?
                                    </a>
                                    <Link to="/register" className="link link-primary">
                                        Create account
                                    </Link>
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform duration-200"
                                >
                                    Login
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="divider text-xs text-base-content/50">
                                OR
                            </div>

                            {/* Google Login */}
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-outline w-full flex items-center gap-2 justify-center hover:bg-base-200 transition"
                            >
                                <FaGoogle className="text-red-500" />
                                Continue with Google
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;