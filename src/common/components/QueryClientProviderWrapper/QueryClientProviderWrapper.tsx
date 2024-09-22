'use client';

import { queryClient } from '@/common/libs/query/query-client';
import { PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';

export type QueryClientProviderWrapperProps = PropsWithChildren;

export default function QueryClientProviderWrapper({
  children,
}: QueryClientProviderWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
