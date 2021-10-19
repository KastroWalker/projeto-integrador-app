import api from "../../config/axios";

export const createMerchant = async (merchantData) => {
  const response = await api.post("/merchants", merchantData);
  return response.data;
};
