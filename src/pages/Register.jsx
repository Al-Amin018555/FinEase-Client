import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, profileUpdate, googleLogIn } = useAuth();
    const navigate = useNavigate();

    useTitle("Register | FinEase");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password, name, photo } = data;

        try {
            const result = await createUser(email, password);

            await profileUpdate(name, photo);

            setUser({
                ...result.user,
                displayName: name,
                photoURL: photo,
            });

            navigate("/");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.message,
            });
        }
    };

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(() => navigate("/"))
            .catch((error) => {
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
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Create Your FinEase Account
                    </h1>

                    <p className="text-base lg:text-lg text-base-content/70">
                        Start your journey towards better financial management. 
                        Track your expenses, set goals, and build a secure future.
                    </p>
                </div>

                {/* Right Card */}
                <div className="w-full max-w-sm mx-auto">

                    <div className="card bg-base-100 shadow-2xl rounded-2xl border border-base-300">

                        <div className="card-body space-y-4">

                            <h2 className="text-2xl font-bold text-center">Create Account</h2>
                            <p className="text-center text-sm text-base-content/60">
                                Start managing your finances today
                            </p>

                            {/* Form */}
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                                {/* Name */}
                                <div>
                                    <label className="label text-sm">Name</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full focus:input-primary"
                                        placeholder="Your name"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && (
                                        <span className="text-red-500 text-sm">Name is required</span>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="label text-sm">Email</label>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full focus:input-primary"
                                        placeholder="Your email"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-sm">Email is required</span>
                                    )}
                                </div>

                                {/* Photo */}
                                <div>
                                    <label className="label text-sm">Photo URL</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full focus:input-primary"
                                        placeholder="Profile photo URL"
                                        {...register("photo")}
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="label text-sm">Password</label>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="input input-bordered w-full focus:input-primary pr-10"
                                            placeholder="Create password"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum 6 characters required",
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                                                    message:
                                                        "Must include uppercase & lowercase",
                                                },
                                            })}
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-gray-500"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <span className="text-red-500 text-sm">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-base-content/60">
                                        Already have an account?
                                    </span>
                                    <Link to="/login" className="link link-primary">
                                        Login
                                    </Link>
                                </div>

                                {/* Register Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full hover:scale-105 transition"
                                >
                                    Register
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="divider text-xs text-base-content/50">
                                OR
                            </div>

                            {/* Google */}
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-outline w-full flex items-center gap-2 justify-center"
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

export default Register;