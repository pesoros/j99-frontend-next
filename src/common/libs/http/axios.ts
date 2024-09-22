import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { CookieSetOptions } from 'universal-cookie';

import { UserSession } from '@/models/types/userdata/auth';
import { useAuthStore } from '../zustand/store/auth';
import { REFRESH_TOKEN_KEY_NAME, TOKEN_KEY_NAME } from './config';
import { cookies } from '../cookies/cookies';

export function getCurrentUser(): UserSession | null {
  const session: UserSession | null = useAuthStore.getState().user;
  return session;
}

export function getToken() {
  return cookies.get<string>(TOKEN_KEY_NAME) || '';
}

export function getRefreshToken() {
  return cookies.get<string>(REFRESH_TOKEN_KEY_NAME) || '';
}

export function setToken(token: string, options: CookieSetOptions = {}) {
  return cookies.set(TOKEN_KEY_NAME, token, options);
}

export function setRefreshToken(
  refreshToken: string,
  options: CookieSetOptions = {}
) {
  return cookies.set(REFRESH_TOKEN_KEY_NAME, refreshToken, options);
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

async function requestSuccessCallback(config: InternalAxiosRequestConfig) {
  const user = getCurrentUser();

  if (config.headers) {
    if (user?.email) {
      config.headers.set('Authorization', `Bearer ${user.token}`);
      config.headers.set('token', user.token);
    }
  }

  return config;
}

export function createAxiosInstance() {
  instance.interceptors.request.use(requestSuccessCallback);

  instance.interceptors.response.use(
    (config) => config,
    async (error: AxiosError) => {
      if (!error.response || error.response.status !== 401) {
        return Promise.reject(error);
      }

      return true;
    }
  );

  return instance;
}

export const http = createAxiosInstance();
