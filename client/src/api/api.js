import axios from 'axios';


const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE || 'https://job-application-tracker-theta-lime.vercel.app/' });


export default API;