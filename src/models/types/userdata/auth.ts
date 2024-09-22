export type UserSession = {
  email: string;
  id: string;
  refreshToken: string;
  token: string;
  csrfToken?: string;
  requestId?: string;
};

export type ResourcesRaw = {
  name: string;
  key: string;
  icon: string;
  href: string;
  childs: ResourcesRaw[];
  permissions: string[];
};
