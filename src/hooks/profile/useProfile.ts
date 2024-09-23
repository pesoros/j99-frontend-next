import { UserSession } from '@/models/types/userdata/auth';

export const useProfile = () => {
  const getUserData = () => {
    const result: UserSession = {
      email: 'budimen@gmail.com',
      id: '829829929',
      refreshToken: 'ncjjce8cewcew8cc8he8c8c8wc',
      token: 'lwmdlwdlkwdklwdokw9wd09wj0wjd9jd',
    };

    return result;
  };

  return {
    getUserData,
  };
};
