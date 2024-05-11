import { axiosInstance } from '@/config/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetAllPublishedEventsQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ['AllPublishedEvents'],
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

export const useSearchPublishedEventQuery = (query) => {
  query = encodeURIComponent(query)
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ['searchedEvents'],
    queryFn: async () => {
      return await axiosInstance.get(`/public/search?q=${query}`);
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
}