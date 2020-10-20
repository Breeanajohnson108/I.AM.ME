import api from './api-config'

//Register api
export let register = async (regData) =>
{
  //Target endpoint
  const response = await api.post('/users', { user: regData })
  //Setting my token in a variable called "localStorage"
  localStorage.setItem('authToken', response.data.token);
  //Attaching string "Bearer" to my header
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
  //Returning User data
  return response.data.user;
}
//Login api
export let logIn = async (logData) =>
{
  //Target endpoint
  const response = await api.post('/auth/login', { authorization: logData })
  //Setting my token in a variable called "localStorage"
  localStorage.setItem('authToken', response.data.token);
  //Attaching string "Bearer" to my header
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
  //Returning User data
  return response.data.user;
}
// Verify api
export let verify = async () =>
{
  //Fetch token first
  const token = localStorage.getItem('authToken');
  //Attaching token to my headers
  if (token)
  {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    //target endpoint
    const response = await api.get('auth/verify');
    //returning data
    return response.data
  }
  return null
}
//Clearing all headers when we log out
export const remove = () =>
{
  api.defaults.headers.common.authorization = null;
}