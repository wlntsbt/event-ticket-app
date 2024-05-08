import { axiosInstance } from '@/config/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetAllPublishedEventsQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryFn: async () => {
      return await axiosInstance.get('/public/all-events');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};

export const useGetPublishedEventQuery = (id) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['publishedEvent'],
    queryFn: async () => {
      return await axiosInstance.get(`/public/event/${id}`);
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};
