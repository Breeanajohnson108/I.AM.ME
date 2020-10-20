import api from './api-config'


//Get All
export const getAllAffirmations = async () =>
{
  const resp = await api.get(`/affirmations`);
  return resp.data;
};

//Get 1
export const getOneAffirmation = async (id) =>
{
  const resp = await api.get(`/affirmations/${id}`);
  return resp.data;
}

//Delete
export const destroyAffirmation = async (id) =>
{
  const resp = await api.delete(`affirmations/${id}`);
  return resp;
}

//Create
export const postaffirmation = async (affirmationData) =>
{
  const resp = await api.post(`affirmations`, { affirmations: affirmationData });
  return resp.data;
}

//Update
export const updateAffirmation = async (id, updatedData) =>
{
  const resp = await api.put(`/affirmations/${id}`, { affirmations: updatedData });
  return resp.data;
}