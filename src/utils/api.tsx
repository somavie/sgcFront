import axios from "axios";

// Cria uma instância do axios com configurações padrão
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Adiciona um interceptor para lidar com erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aqui você pode lidar com erros globais de forma centralizada
    if (error.response && error.response.status === 401) {
      // Redirecionar ou lidar com erro de autenticação
    }
    return Promise.reject(error);
  }
);

// Funções de chamada de API reutilizáveis

export const post = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const get = async (url: string) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url: string, data: any) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const del = async (url: string) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
