import { useGetUserPromoQuery } from '../../api/user/useUserPromoQuery';

export const useGetUserPromo = () => {
  const { data: userPromo, isSuccess, isError } = useGetUserPromoQuery();

  return {
    userPromo: userPromo?.data.data,
  };
};
