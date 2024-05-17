import { useReviewEventMutation } from '../../api/user/useReviewMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useCreatePurchase = () => {
  const router = useRouter();

  const { mutate: mutationReviewEvent } = useReviewEventMutation({
    onSuccess: (res) => {
      toast.success(res?.data.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return {
    mutationReviewEvent,
  };
};
