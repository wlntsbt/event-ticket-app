'use client';
import { useGetUserInfo } from '@/hooks/user/useGetUserData';

export default function UserProfile() {
  const { userInfo } = useGetUserInfo();

  if (!userInfo) return <div>Loading...</div>;
  
  console.log(userInfo);
  return <div></div>;
}
