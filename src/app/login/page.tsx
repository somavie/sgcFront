"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [usuarioNome, setUsuarioNome] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8088/user/login", {
        usuarioNome,
        senha,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      router.push("/");
    } catch (error) {
      setMessage("Erro ao autenticar usuário.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={usuarioNome}
            onChange={(e) => setUsuarioNome(e.target.value)}
            placeholder="Nome de Usuário"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          {message && (
            <p className="text-red-500 text-center mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
