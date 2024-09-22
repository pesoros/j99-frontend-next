import { ResourcesRaw, UserSession } from '@/models/types/userdata/auth';
import { create } from 'zustand';

export type AuthState = {
  user: UserSession;
  resources: ResourcesRaw[];
  setUser: (user: UserSession) => void;
  setResources: (resources: ResourcesRaw[]) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: {
    email: '',
    expiredSecond: '',
    id: '',
    refreshToken: '',
    token: '',
    csrfToken: '',
    requestId: '',
  },
  resources: [],
  setUser(user) {
    set((state) => ({
      ...state,
      user,
    }));
  },
  setResources(resources) {
    set((state) => ({
      ...state,
      resources,
    }));
  },
}));
