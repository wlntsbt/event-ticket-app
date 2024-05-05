import axios from 'axios';
import { getCookie } from '@/utils/cookiesHelper';
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const cookie = await getCookie();
    // console.log("ini cookie",cookie)
    if (cookie) {
      // console.log("ini cookie beneran ada",cookie.value)
      request.headers['accesstoken'] = cookie.value;
    }

    return request;
  },
  (error) => {
    console.log('>>>ERROR');
    console.log(error);
  },
);
