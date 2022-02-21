import axios from "axios";

/**
 * @name
 * @description  function initates axios instances  and passes their default values
 * @type {{growthApi:{Promise<{axios: AxiosInstance<Function}>}}
 * @return {Object}
 */
export default (() => {
  const baseApi = () => {
    let baseURL = "http://localhost:5050/api/v1";
    let token: string | null = "";
    if (sessionStorage.getItem("token")) {
      token = sessionStorage.getItem("token");
    }
    if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
      baseURL = "https://ace-todo-node-api.herokuapp.com/api/v1";
    }
    return axios.create({
      baseURL,
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  return { baseApi };
})();
