import {
  useAuthMutation,
  usePersistLoginMutation,
} from '@/api/useAuthMutation';
import { useRouter } from 'next/navigation';
import { setCookie, deleteCookie } from '@/utils/cookiesHelper';
import { setUser } from '@/redux/slice/userSlice';
import { useDispatch } from 'react-redux';

export const useAuthLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate: mutationAuth } = useAuthMutation({
    onSuccess: (res) => {
      setCookie(res?.data.data.accesstoken);
      dispatch(
        setUser({
          uid: res.data.data.uid,
          role: res.data.data.role,
          username: res.data.data.username,
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

export const usePersistLogin = () => {
  const dispatch = useDispatch();
  const { mutate: mutationPersist } = usePersistLoginMutation({
    onSuccess: (res) => {
      dispatch(
        setUser({
          uid: res.data.data.uid,
          role: res.data.data.role,
          username: res.data.data.username,
        }),
      );
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutationPersist,
  };
};

export const useLogout = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(
      setUser({
        uid: '',
        role: '',
        username: '',
      }),
    );
    deleteCookie();
    localStorage.clear();
    alert('Logged Out');
    navigate.push('/');
    // window.location.reload();
  };

  return { logout };
};
