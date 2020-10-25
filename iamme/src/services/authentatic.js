import iameApi from './api-config'

//Register api
export let register = async (regData) =>
{
  //Target endpoint
  const response = await iameApi.post('/users', { user: regData })
  //Setting my token in a variable called "localStorage"
  localStorage.setItem('authToken', response.data.token);
  //Attaching string "Bearer" to my header
  iameApi.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
  //Returning User data
  return response.data.user;
}
//Login api
export let logIn = async (logData) =>
{
  //Target endpoint 
  console.log(logData)
  const response = await iameApi.post('/auth/login', { authentication: logData })
  //Setting my token in a variable called "localStorage"
  localStorage.setItem('authToken', response.data.token);
  //Attaching string "Bearer" to my header
  iameApi.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
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
    iameApi.defaults.headers.common.authorization = `Bearer ${token}`;
    //target endpoint
    const response = await iameApi.get('auth/verify');
    //returning data
    return response.data
  }
  return null
}
//Clearing all headers when we log out
export const remove = () =>
{
  iameApi.defaults.headers.common.authorization = null;
}