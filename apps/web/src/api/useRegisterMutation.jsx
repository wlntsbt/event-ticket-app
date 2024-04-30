import { axiosInstance } from '../config/axios';
import { useMutation } from '@tanstack/react-query';

export const usePromoterRegisterMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({
      email,
      password,
      username,
      name,
      location,
      phone,
    }) => {
      return await axiosInstance.post('/register/promoter', {
        name,
        username,
        email,
        password,
        location,
        phone,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};

export const useUserRegisterMutation = ({ onSuccess, onError }) => {
  console.log("USER REGISTER MUTATION")
  const { mutate } = useMutation({
    mutationFn: async ({
      email,
      username,
      password,
      firstName,
      lastName,
      dob,
      phone,
      idCardNumber,
      memberCode,
    }) => {
      return await axiosInstance.post('/register/user', {
        email,
        username,
        password,
        firstName,
        lastName,
        dob,
        phone,
        idCardNumber,
        memberCode,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
