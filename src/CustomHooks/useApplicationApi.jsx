import { useCallback } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();

  const getMyApplications = useCallback(
    async (email) => {
      const res = await axiosSecure.get(`/applications?email=${email}`);
      return res.data;
    },
    [axiosSecure]
  );

  return { getMyApplications };
};

export default useApplicationApi;
