'use client';

import { useRef } from 'react';
import { UserSession } from '@/models/types/userdata/auth';
import { useAuthStore } from '../store/auth';

type AuthStoreInitializerProps = {
  user: UserSession | null;
};

export function AuthStoreInitializer({
  user: session,
}: AuthStoreInitializerProps) {
  const isInitialized = useRef(false);

  if (!isInitialized.current && session) {
    useAuthStore.setState({ user: session });
    isInitialized.current = true;
  }

  return null;
}
