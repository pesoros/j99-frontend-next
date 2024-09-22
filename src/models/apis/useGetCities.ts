import { UseQueryOptions, useQuery } from 'react-query';
import { http } from '@/common/libs/http/axios';
import { AxiosErrorResponse } from '@/common/types/AxiosErrorResponse';
import { Cities } from '../types/masterdata/city';

export const GetCitiesStatusQueryKey = 'datakota';

export type UseGetTransactionExportQueryProps = {
  options?: UseQueryOptions<Cities, AxiosErrorResponse>;
};

async function fetchGetCities() {
  const { data } = await http.post<Cities>('/datakota');

  return data;
}

export const useGetCities = () => {
  return useQuery({
    refetchOnWindowFocus: false,
    queryFn: fetchGetCities,
    queryKey: [GetCitiesStatusQueryKey],
  });
};
