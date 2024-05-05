import { axiosInstance } from '@/config/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useCreateEventMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async (fd) => {
      return await axiosInstance.post('/promoter/event/new', fd);
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};

export const useGetAllEventsQuery = () => {
  const { data, isSuccess, isError } = useQuery({
    queryFn: async () => {
      return await axiosInstance.get('/promoter/event/all-events');
    },
  });

  return {
    data,
    isSuccess,
    isError,
  };
};

export const usePublishEventMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      return await axiosInstance.patch('/promoter/event/publish', { id });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
