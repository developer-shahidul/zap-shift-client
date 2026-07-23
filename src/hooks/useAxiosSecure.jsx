import axios from "axios";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // headers: "credentials",
  });

  //   axiosSecure.interceptors.request.use();
  //   axiosSecure.interceptors.response.use()
  return axiosSecure;
};

export default useAxiosSecure;
