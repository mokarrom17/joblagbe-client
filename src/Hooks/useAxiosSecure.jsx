import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    const interceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosSecure.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
