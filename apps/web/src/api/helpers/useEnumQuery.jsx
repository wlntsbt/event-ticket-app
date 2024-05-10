import { axiosInstance } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetAllLocationQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryFn: async () => {
      return await axiosInstance.get('/enums/location');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};
