// SignIn.jsx
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white rounded-xl bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 hover:opacity-90 transition-all duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?
          <a
            href="#"
            className="text-pink-500 font-semibold ml-1 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
