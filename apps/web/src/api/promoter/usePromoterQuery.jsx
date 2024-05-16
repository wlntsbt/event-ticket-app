import { axiosInstance } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetPromoterInfoQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['promoterInfo'],
    queryFn: async () => {
      return await axiosInstance.get('/promoter/data');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};
