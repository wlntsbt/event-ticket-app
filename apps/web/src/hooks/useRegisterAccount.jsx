import { useRouter } from 'next/navigation';
import { setCookie } from '@/utils/cookiesHelper';
import { setUser } from '@/redux/slice/userSlice';
import { useDispatch } from 'react-redux';
import {
  useUserRegisterMutation,
  usePromoterRegisterMutation,
} from '../api/useRegisterMutation';

export const usePromoterRegister = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mutate: mutationPromoterRegister } = usePromoterRegisterMutation({
    onSuccess: (res) => {
      console.log(res?.data.data);
      setCookie(res?.data.data.accesstoken);

      dispatch(
        setUser({
          uid: res.data.data.uid,
          role: res.data.data.role,
        }),
      );
      alert(res.data.message);
      router.push('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return {
    mutationPromoterRegister,
  };
};

export const useUserRegister = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mutate: mutationUserRegister } = useUserRegisterMutation({
    onSuccess: (res) => {
      console.log(res?.data.data);
      setCookie(res?.data.data.accesstoken);

      dispatch(
        setUser({
          uid: res.data.data.uid,
          role: res.data.data.role,
        }),
      );
      alert(res.data.message);
      router.push('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return {
    mutationUserRegister,
  };
};
