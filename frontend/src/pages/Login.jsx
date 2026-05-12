// src/pages/Login.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import api from "../api/api";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    // LOGIN FUNCTION
    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await api.post("/auth/login", {
                email,
                password,
            });

            console.log(res.data);

            // SAVE TOKEN
            localStorage.setItem(
                "token",
                res.data.token
            );

            // SAVE USER
            localStorage.setItem(
                "user",
                JSON.stringify({
                    _id: res.data._id,
                    name: res.data.name,
                    email: res.data.email,
                    role: res.data.role,
                })
            );

            // ADMIN OR USER
            if (res.data.role === "admin") {

                navigate("/admin-dashboard");

            } else {

                navigate("/dashboard");
            }

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        } finally {
            setLoading(false);
        }
    };

return (
    <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-4"
        style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop')",
        }}
    >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/85"></div>

        {/* LEFT INFO (hidden on mobile) */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-gray-400 text-[10px] sm:text-sm font-bold uppercase leading-5 sm:leading-7 z-10 hidden sm:block">
            <p>COORD_LAT: 40.7128</p>
            <p>COORD_LONG: 74.0060</p>
            <p>SYSTEM_STATUS: NOMINAL</p>
        </div>

        {/* RIGHT INFO (hidden on mobile) */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-gray-400 text-[10px] sm:text-sm font-bold uppercase text-right leading-5 sm:leading-7 z-10 hidden sm:block">
            <p>VERSION_042.88</p>
            <p>BUILD_STAMP: 2026.Q2</p>
            <p>FITZONE_CORE_ENV</p>
        </div>

        {/* LOGIN CARD */}
        <div className="relative z-20 bg-[#f5f5f2] w-full max-w-[460px] border border-black shadow-[10px_10px_0px_#000] p-6 sm:p-10 lg:p-12">

            {/* TOP */}
            <div className="flex items-start justify-between mb-8 sm:mb-12 gap-4">

                <div>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight">
                        Industrial Login
                    </h1>

                    <p className="text-gray-400 uppercase mt-3 sm:mt-4 tracking-[2px] text-xs sm:text-sm">
                        Secure_Authentication_Gateway
                    </p>
                </div>

                <div className="bg-[#d6ff00] w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-black font-bold">
                    🔒
                </div>
            </div>

            <div className="border-t border-gray-300 mb-8 sm:mb-12"></div>

            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-8 sm:space-y-10">

                {/* EMAIL */}
                <div>
                    <label className="uppercase text-xs sm:text-sm font-black tracking-[2px] block mb-3">
                        Entry_Point // Email
                    </label>

                    <input
                        type="email"
                        placeholder="user@fitzone.sys"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-black bg-transparent px-4 sm:px-5 py-3 sm:py-5 outline-none text-base sm:text-lg placeholder:text-gray-300"
                    />
                </div>

                {/* PASSWORD */}
                <div>
                    <div className="flex justify-between items-center mb-3 gap-2">

                        <label className="uppercase text-xs sm:text-sm font-black tracking-[2px]">
                            Access_Key // Password
                        </label>

                        <button
                            type="button"
                            className="text-gray-400 text-[10px] sm:text-xs uppercase"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full border border-black bg-transparent px-4 sm:px-5 py-3 sm:py-5 outline-none text-base sm:text-lg placeholder:text-gray-300"
                    />
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#d6ff00] hover:bg-lime-300 transition-all duration-300 py-4 sm:py-5 flex items-center justify-center gap-3 sm:gap-4 text-black font-black text-lg sm:text-2xl lg:text-3xl uppercase mt-4 sm:mt-6"
                >
                    {loading ? "AUTHORIZING..." : "Authorize Access"}
                    <ArrowRight size={28} className="sm:w-8 sm:h-8" />
                </button>
            </form>

            {/* REGISTER */}
            <div className="mt-10 sm:mt-16 border-t border-gray-300 pt-8 sm:pt-10">

                <p className="text-center text-gray-500 text-base sm:text-xl lg:text-2xl">
                    New operator required?{" "}
                    <Link
                        to="/register"
                        className="font-black underline uppercase text-black"
                    >
                        Register_New_ID
                    </Link>
                </p>

                <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">

                    <div className="w-8 sm:w-12 h-[1px] bg-gray-300"></div>

                    <p className="text-gray-300 uppercase text-[10px] sm:text-xs tracking-[3px]">
                        End Of Line
                    </p>

                    <div className="w-8 sm:w-12 h-[1px] bg-gray-300"></div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;