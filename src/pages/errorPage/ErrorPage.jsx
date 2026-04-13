/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found 😢
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-md mx-auto">
          The page you are looking for might have been removed, renamed, 
          or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:scale-105 transition"
          >
            🔙 Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;