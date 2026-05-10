import { useState } from "react";
import { ArrowRight, House } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match");

            return;
        }

        try {

            const res = await api.post(
                "/auth/register",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }
            );

            console.log(res.data);

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f5f2]">
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-300">
                <h1 className="text-4xl font-black tracking-tight">
                    FITZONE_SYSTEMS
                </h1>

                <div className="flex items-center gap-8 text-sm font-semibold text-gray-500 uppercase">
                    <p>Support_Node</p>

                    <div className="w-[1px] h-6 bg-gray-300"></div>

                    <Link to="/">
                        <House className="w-7 h-7 text-gray-500 hover:text-lime-500 transition-all duration-300" />
                    </Link>
                </div>
            </div>

            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-90px)]">
                {/* Left Side */}
                <div
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/65"></div>

                    <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white">
                        <div className="inline-block bg-lime-400 text-black px-4 py-1 text-sm font-bold uppercase mb-6 w-fit">
                            SYSTEM_ACCESS: LEVEL_01
                        </div>

                        <h1 className="text-6xl font-black leading-none uppercase">
                            JOIN THE
                        </h1>

                        <h1 className="text-6xl font-black leading-none uppercase">
                            <span className="text-lime-400">ELITE</span>_CORPS
                        </h1>

                        <p className="mt-8 text-gray-300 text-xl leading-10 max-w-xl">
                            Initialize your biological data stream and synchronize with the
                            high-performance FitZone network. No compromises. Total data
                            transparency.
                        </p>

                        <div className="flex gap-16 mt-12">
                            <div>
                                <p className="text-gray-400 text-sm uppercase">
                                    Active_Users
                                </p>

                                <h2 className="text-5xl font-black mt-2">
                                    12.4K+
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm uppercase">
                                    Performance_Avg
                                </p>

                                <h2 className="text-5xl font-black mt-2 text-lime-400">
                                    98.2%
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center px-10 py-16">
                    <div className="w-full max-w-xl">
                        <h1 className="text-6xl font-black uppercase">
                            REGISTRATION_PORTAL
                        </h1>

                        <div className="w-16 h-1 bg-lime-400 mt-4"></div>

                        <p className="text-gray-500 text-xl mt-4 leading-9">
                            Input required parameters to generate your unique member
                            signature.
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-16 space-y-10"
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-black uppercase mb-4 tracking-wider">
                                    FULL_IDENTITY_STRING
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="E.G. JOHN_DOE_01"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-4 outline-none text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-black uppercase mb-4 tracking-wider">
                                    COMMUNICATION_ENDPOINT
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="USER@FITZONE.SYS"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-4 outline-none text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-black uppercase mb-4 tracking-wider">
                                    SECURE_KEY_HASH
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••••"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-4 outline-none text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-black uppercase mb-4 tracking-wider">
                                    VALIDATE_KEY_HASH
                                </label>

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="••••••••••"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-4 outline-none text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-4 pt-2">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 accent-lime-400 mt-1"
                                    required
                                />

                                <p className="text-sm text-gray-500 leading-7 uppercase">
                                    I ACCEPT THE OPERATIONAL PROTOCOL AND DATA
                                    INTEGRITY POLICIES OF FITZONE.
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-lime-400 hover:bg-lime-300 transition-all duration-300 py-6 flex items-center justify-between px-8 text-black font-black text-2xl uppercase mt-10"
                            >
                                INITIALIZE_ACCOUNT

                                <ArrowRight size={32} />
                            </button>
                        </form>

                        {/* Login */}
                        <div className="mt-20">
                            <p className="text-center text-gray-300 uppercase text-sm mb-6">
                                ALREADY_REGISTERED_IN_DATABASE?
                            </p>

                            <Link
                                to="/login"
                                className="w-full border-2 border-black py-5 text-2xl uppercase font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                            >
                                EXECUTE_LOGIN_SEQUENCE
                            </Link>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-20 text-gray-400 text-sm uppercase">
                            <p>VER: 2.0.42_STABLE</p>

                            <p>ENCRYPTION: AES-256</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;