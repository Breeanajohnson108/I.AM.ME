import api from './api-config'

//Get All
export const getAllCategories = async () =>
{
  const resp = await api.get(`/category`);
  return resp.data;
};

//Get 1
export const getOneCategory = async (id) =>
{
  const resp = await api.get(`/category/${id}`);
  return resp.data;
}