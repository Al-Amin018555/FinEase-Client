import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../hooks/UseAuth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, profileUpdate,googleLogIn} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { email, password, name, photo } = data;
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                profileUpdate(name, photo)
                setUser(result.user)

            })
            .catch(error => console.log(error))

    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                            <label className="label">Name</label>
                            <input focus:border-primary outline-0 type="text" name="name" className="input focus:border-primary outline-0" {...register("name", { required: true })} placeholder="Name" />
                            {errors.name && <span className="text-red-500">This field is required</span>}

                            <label className="label">Email</label>
                            <input focus:border-primary outline-0 type="email" name="email" className="input focus:border-primary outline-0" {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <label className="label">PhotoURL</label>
                            <input focus:border-primary outline-0 type="text" name="photo" className="input focus:border-primary outline-0" {...register("photo")} placeholder="PhotURL" />

                            <label className="label">Password</label>
                            <div className="relative">
                                <input focus:border-primary outline-0
                                    type={showPassword ? "text" : "password"}
                                    className="input focus:border-primary outline-0"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                                            message:
                                                "Password must contain at least one uppercase and one lowercase letter",
                                        },
                                    })}
                                />
                                <button onClick={() => setShowPassword(!showPassword)} className="p-3 absolute right-5">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </button>
                            </div>
                            {errors.password && (
                                <span className="text-red-500">{errors.password.message}</span>
                            )}


                            <div className="flex justify-between">
                                <a className="link link-hover">Already have an account? </a>
                                <Link to="/register" className="text-blue-500 underline">Login</Link>
                            </div>
                            <button className="btn btn-primary mt-4">Register</button>
                            <button onClick={() => googleLogIn()} className="btn bg-base-100 text-black border-info">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;