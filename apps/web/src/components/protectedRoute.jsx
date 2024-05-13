'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCookie } from '@/utils/cookiesHelper';
import { usePersistLogin } from '@/hooks/useLogin';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const navigate = useRouter();
  const path = usePathname();
  const { mutationPersist } = usePersistLogin();
  const userState = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const authorizeUser = (user) => {
    const persisting = mutationPersist();
    if (!loading) {
      const promoterPath = ['/promoter'];
      const userPath = ['/user'];
      const publicPath = ['/'];

      if (userState.role !== 'PROMOTER' && promoterPath.includes(path)) {
        alert('Access Denied! Promoter Route!');
        navigate.push('/');
      }
      if (userState.role !== 'USER' && userPath.includes(path)) {
        alert('Access Denied! User Route!');
        navigate.push('/');
      }
    }
  };

  useEffect(() => {
    if (userState.role) {
      setLoading(false);
      authorizeUser(userState);
    }
    authorizeUser(userState);
  }, [userState, loading]);

  return <>{children}</>;
}
