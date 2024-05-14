import { useReviewEventMutation } from '../../api/user/useReviewMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useCreatePurchase = () => {
  const router = useRouter();

  const { mutate: mutationReviewEvent } = useReviewEventMutation({
    onSuccess: (res) => {
      console.log(res?.data);
      toast.success(res?.data.message);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return {
    mutationReviewEvent,
  };
};
