import { axiosInstance } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetUserPromoQuery = (id) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['userPromo'],
    queryFn: async () => {
      return await axiosInstance.get(`/user/data/promos/${id}`);
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

export const useGetUserInfoQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      return await axiosInstance.get('/user/data');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};

export const useGetUserReviewQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['userReview'],
    queryFn: async () => {
      return await axiosInstance.get('/user/data/reviews');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
}
