import api from "../../config/axios";

export const createClient = async (clientData) => {
  const response = await api.post("/clients", clientData);
  return response.data;
};
