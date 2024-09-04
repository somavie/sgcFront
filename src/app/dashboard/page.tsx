"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext) || {};
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the protected dashboard!
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
