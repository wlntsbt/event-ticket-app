import { axiosInstance } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetUserPromoQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['userPromo'],
    queryFn: async () => {
      return await axiosInstance.get('/user/data/promos');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};

export const useGetUserTransactionQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['userTransaction'],
    queryFn: async () => {
      return await axiosInstance.get('/user/data/transactions');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};
