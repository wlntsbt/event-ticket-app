import { axiosInstance } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetUserPromoQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['userPromo'],
    queryFn: async () => {
      return await axiosInstance.get('/user/promos');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};
