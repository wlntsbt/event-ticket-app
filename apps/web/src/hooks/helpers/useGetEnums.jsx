import { useGetAllLocationQuery } from '@/api/helpers/useEnumQuery';

export const useGetAllLocations = () => {
  const { data: allLocations, isSuccess, isError } = useGetAllLocationQuery();

  if (!isSuccess) return {};

  if (isError) return {};

  return {
    allLocations: allLocations?.data.data,
  };

};
