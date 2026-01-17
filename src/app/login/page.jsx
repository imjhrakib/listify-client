"use client";

import { useState } from "react";
import Cookies from "js-cookie"; // ✅ Use js-cookie
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "user@test.com" && password === "123456") {
      Cookies.set("auth", "true", { expires: 1 });
      router.push("/items");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#234C6A] px-4">
      <div className="max-w-md w-full bg-[#1B3C53] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#D2C1B6] text-center mb-6">
          Login to Listify
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#D2C1B6] mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@test.com"
              className="w-full px-4 py-2 rounded-md border border-[#234C6A] focus:outline-none focus:ring-2 focus:ring-[#456882] bg-[#234C6A] text-[#D2C1B6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#D2C1B6] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              className="w-full px-4 py-2 rounded-md border border-[#234C6A] focus:outline-none focus:ring-2 focus:ring-[#456882] bg-[#234C6A] text-[#D2C1B6]"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 rounded-md bg-[#456882] text-white font-semibold hover:bg-[#234C6A] transition-colors duration-200"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-[#D2C1B6] mt-6">
          Demo Credentials: <br />
          Email: <span className="font-medium">user@test.com</span> | Password:{" "}
          <span className="font-medium">123456</span>
        </p>
      </div>
    </div>
  );
}
