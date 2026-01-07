import React, { useCallback } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useJobApi = () => {
  const axiosSecure = useAxiosSecure();

  const getMyJobs = useCallback(
    async (email) => {
      const res = await axiosSecure.get(`/jobsByEmailAddress?email=${email}`);
      return res.data;
    },
    [axiosSecure]
  );

  return {
    getMyJobs,
  };
};

export default useJobApi;
