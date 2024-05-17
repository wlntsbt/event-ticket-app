'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePersistLogin } from '@/hooks/useLogin';
import { useSelector } from 'react-redux';
import Spinner from './general/spinner';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const path = usePathname();
  const { mutationPersist } = usePersistLogin();
  const userState = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const authorizeUser = () => {
    if (userState.role) {
      if (path.includes('promoter') && userState.role !== 'PROMOTER') {
        alert('Access Denied! Promoter Route!');
        router.push('/');
      }

      if (path.includes('user') && userState.role !== 'USER') {
        alert('Access Denied! User Route!');
        router.push('/');
      }
    } else {
      if (path.includes('promoter') || path.includes('user')) {
        alert('Access Denied! You are not a registered account!');
        router.push('/');
      }
    }
  };

  const checkUser = async () => {
    try {
      await mutationPersist();
      setLoading(false);
    } catch (error) {
      console.error('Error during persisting login:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, [mutationPersist]);

  useEffect(() => {
    if (!loading) {
      authorizeUser();
    }
  }, [loading, path, userState.role]);

  return loading ? <Spinner/> : <>{children}</>;
}
