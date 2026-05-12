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
            const res = await api.post("/auth/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            console.log(res.data);
            alert("Registration Successful");
            navigate("/login");
        } catch (error) {
            console.log(error);
            alert("Registration Failed");
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f5f2] overflow-x-hidden">

            {/* Top Navbar */}
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-gray-300 gap-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                    FITZONE_SYSTEMS
                </h1>

                <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-semibold text-gray-500 uppercase">
                    <p>Support_Node</p>
                    <div className="w-[1px] h-5 sm:h-6 bg-gray-300"></div>
                    <Link to="/">
                        <House className="w-6 h-6 sm:w-7 sm:h-7 text-gray-500 hover:text-lime-500 transition-all duration-300" />
                    </Link>
                </div>
            </div>

            {/* Main */}
            <div className="grid grid-cols-1 px-2 lg:grid-cols-2 min-h-[calc(100vh-80px)]">

                {/* LEFT SIDE */}
                <div
                    className="relative bg-cover  bg-center min-h-[300px] lg:min-h-full"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/65"></div>

                    <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-10 text-white">
                        <div className="inline-block bg-lime-400 text-black px-3 py-1 text-xs sm:text-sm font-bold uppercase mb-4 w-fit">
                            SYSTEM_ACCESS: LEVEL_01
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase">
                            JOIN THE
                        </h1>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase">
                            <span className="text-lime-400">ELITE</span>_CORPS
                        </h1>

                        <p className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg lg:text-xl leading-7 sm:leading-9 max-w-xl">
                            Initialize your biological data stream and synchronize with the
                            high-performance FitZone network. No compromises. Total data transparency.
                        </p>

                        <div className="flex flex-wrap gap-10 sm:gap-16 mt-8 sm:mt-12">
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm uppercase">
                                    Active_Users
                                </p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2">
                                    12.4K+
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm uppercase">
                                    Performance_Avg
                                </p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 text-lime-400">
                                    98.2%
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-center px-4 sm:px-8 lg:px-10 py-10 sm:py-16">
                    <div className="w-full max-w-xl">

                        <h2 className="text-3xl sm:text-5xl lg:text-3xl font-black uppercase">
                            REGISTRATION_PORTAL
                        </h2>

                        <div className="w-14 sm:w-16 h-1 bg-lime-400 mt-4"></div>

                        <p className="text-gray-500 text-base sm:text-lg lg:text-xl mt-4 leading-7 sm:leading-9">
                            Input required parameters to generate your unique member signature.
                        </p>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="mt-10 sm:mt-16 space-y-8 sm:space-y-10">

                            {/* NAME */}
                            <div>
                                <label className="block text-xs sm:text-sm font-black uppercase mb-3 sm:mb-4 tracking-wider">
                                    FULL_IDENTITY_STRING
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="E.G. JOHN_DOE_01"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-3 sm:py-4 outline-none text-lg sm:text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="block text-xs sm:text-sm font-black uppercase mb-3 sm:mb-4 tracking-wider">
                                    COMMUNICATION_ENDPOINT
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="USER@FITZONE.SYS"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-3 sm:py-4 outline-none text-lg sm:text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label className="block text-xs sm:text-sm font-black uppercase mb-3 sm:mb-4 tracking-wider">
                                    SECURE_KEY_HASH
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••••"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-3 sm:py-4 outline-none text-lg sm:text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* CONFIRM */}
                            <div>
                                <label className="block text-xs sm:text-sm font-black uppercase mb-3 sm:mb-4 tracking-wider">
                                    VALIDATE_KEY_HASH
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="••••••••••"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 py-3 sm:py-4 outline-none text-lg sm:text-xl placeholder:text-gray-300"
                                />
                            </div>

                            {/* CHECKBOX */}
                            <div className="flex items-start gap-3 sm:gap-4 pt-2">
                                <input type="checkbox" className="w-5 h-5 sm:w-6 sm:h-6 accent-lime-400 mt-1" required />
                                <p className="text-xs sm:text-sm text-gray-500 leading-6 uppercase">
                                    I ACCEPT THE OPERATIONAL PROTOCOL AND DATA INTEGRITY POLICIES OF FITZONE.
                                </p>
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full bg-lime-400 hover:bg-lime-300 transition-all duration-300 py-4 sm:py-6 flex items-center justify-between px-6 sm:px-8 text-black font-black text-lg sm:text-2xl uppercase mt-8 sm:mt-10"
                            >
                                INITIALIZE_ACCOUNT
                                <ArrowRight size={28} className="sm:w-8 sm:h-8" />
                            </button>
                        </form>

                        {/* LOGIN */}
                        <div className="mt-12 sm:mt-20">
                            <p className="text-center text-gray-300 uppercase text-xs sm:text-sm mb-4 sm:mb-6">
                                ALREADY_REGISTERED_IN_DATABASE?
                            </p>

                            <Link
                                to="/login"
                                className="w-full border-2 border-black py-4 sm:py-5 text-lg sm:text-2xl uppercase font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                            >
                                EXECUTE_LOGIN_SEQUENCE
                            </Link>
                        </div>

                        {/* FOOTER */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-12 sm:mt-20 text-gray-400 text-xs sm:text-sm uppercase">
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