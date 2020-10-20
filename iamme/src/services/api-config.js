import axios from 'axios';

baseUrl = 'http://localhost:3000/';

//Creating instance of api

const iameApi = axios.create({
  baseURL: baseUrl
})

export default applicationCache;