import { useAuthMutation } from '@/api/useAuthMutation';
import { useRouter } from 'next/navigation';
import { setCookie } from '@/utils/cookiesHelper';
import { setUser } from '@/redux/slice/userSlice';
import { useDispatch } from 'react-redux';

export const useAuthLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate: mutationAuth } = useAuthMutation({
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
    mutationAuth,
  };
};
