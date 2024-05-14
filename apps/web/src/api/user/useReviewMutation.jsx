import { axiosInstance } from '@/config/axios';
import { useMutation } from '@tanstack/react-query';

export const useReviewEventMutation = ({ onSuccess, onError }) => {
  const { mutate } = useMutation({
    mutationFn: async ({ rating, feedback, eventId }) => {
      return await axiosInstance.post('/user/review/', {
        rating,
        feedback,
        eventId,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
  };
};
