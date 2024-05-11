import { usePurchaseTicketMutation } from '../../api/user/useTicketMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setBill } from '@/redux/slice/billSlice';
export const useCreatePurchase = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate: mutationPurchaseTicket } = usePurchaseTicketMutation({
    onSuccess: (res) => {
      console.log(res?.data);
      toast.success(res?.data.message);
      dispatch(
        setBill({
          billId: res.data.data.id,
          usePoint: res.data.data.usePoint,
          useVoucher: res.data.data.useVoucher,
          usePoint: res.data.data.usePoint,
          status: res.data.data.status,
          booking: res.data.data.Booking,
          total: res.data.data.total
        }),
      );
      router.push('/bill');
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return {
    mutationPurchaseTicket,
  };
};
