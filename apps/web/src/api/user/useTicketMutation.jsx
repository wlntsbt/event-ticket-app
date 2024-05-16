import { axiosInstance } from '@/config/axios';
import { useMutation } from '@tanstack/react-query';

export const usePurchaseTicketMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ bookingData, usePoint, voucherId, discountId }) => {
      return await axiosInstance.post('/user/bill/', {
        bookingData,
        usePoint,
        voucherId,
        discountId,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
