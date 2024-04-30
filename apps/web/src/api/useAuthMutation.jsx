import { axiosInstance } from '../config/axios';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

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