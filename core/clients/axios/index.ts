import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

export interface ApiResponse<T> {
  status: number;
  data: T;
  error: boolean;
  errorMessage?: string;
}

export interface ApiInstanceError extends AxiosError<ApiResponse<any>> {}

export const ApiInstnace = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_URL,
});

ApiInstnace.interceptors.request.use(config => {
  const token = Cookies.get('token');
  const headers = {
    Authorization: token ? `Bearer ${token}` : '',
  };

  return {
    ...config,
    headers,
  };
});

export const apiInstanceFetcher = (url: string) =>
  ApiInstnace.get(url).then(res => res.data);
