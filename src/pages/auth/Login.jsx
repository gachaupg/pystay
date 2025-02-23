import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="pt-20 pl-10 pr-10 w-full  h-screen flex justify-around items-center"
    >
      <div>
        <img
          style={{
            width: "80%",
            height: "80%",
          }}
          src="https://res.cloudinary.com/pitz/image/upload/v1739645405/3d_1_hzr6i4.jpg"
          alt=""
        />
      </div>
      <div
        style={{
          width: "58%",
          height: "70%",
        }}
        className="flex border rounded-lg flex-col p-4 space-y-4"
      >
        <h3>Welcome to pysell</h3>
        <p>Login to your Account</p>
        <form className="flex flex-col space-y-4">
          <div className="relative">
            <Mail className="absolute left-2 top-3 text-gray-500" />
            <input
              className="w-full pl-10 border rounded-lg p-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-2 top-3 text-gray-500" />
            <input
              className="w-full pl-10 pr-10 border rounded-lg p-2"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>
          <p>
            If you have an account please{" "}
            <span className="text-blue-700 cursor-pointer">
              <Link to="/register">Register</Link>{" "}
            </span>
          </p>
          <button className="bg-blue-800 p-2 rounded-xl text-white">
            Login
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
