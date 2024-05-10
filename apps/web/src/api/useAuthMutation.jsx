import { axiosInstance } from '../config/axios';
import { useMutation } from '@tanstack/react-query';

export const useAuthMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ email, password }) => {
      return await axiosInstance.post('/auth/login', {
        email,
        password,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};

export const usePersistLoginMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async () => {
      return await axiosInstance.post('/auth/persist');
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
