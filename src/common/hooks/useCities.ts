'use client';

import { useGetCities } from '@/models/apis/useGetCities';
import { AutocompleteType } from '../types/Mui';

export const useCities = () => {
  const { data: citiesData } = useGetCities();

  const mappedCity = () => {
    const result: AutocompleteType[] | undefined = citiesData?.map((item) => {
      return {
        id: item.id,
        label: item.namaKota,
      };
    });

    return result;
  };

  return {
    citiesData,
    mappedCity,
  };
};
