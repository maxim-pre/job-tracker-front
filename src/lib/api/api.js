import authAxios from "../authAxios";
import apiRoute from "../apiRoute";

const fetchCurrentUser = async () => {
  try {
    const response = await authAxios.get(`${apiRoute}current_user`);
    return response.data;
  } catch (error) {
    console.log(error);
    return "";
  }
};

const updateJobStatusById = async (id, status) => {
  const data = { status: status };

  if (status === "applied") {
    data["date_applied"] = new Date();
  }

  try {
    const response = await authAxios.put(`${apiRoute}jobs/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchCurrentUser, updateJobStatusById };
