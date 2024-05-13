import {
  useGetUserPromoQuery,
  useGetUserTransactionQuery,
  useGetUserInfoQuery,
} from '../../api/user/useUserQuery';

export const useGetUserPromo = () => {
  const { data: userPromo, isSuccess, isError } = useGetUserPromoQuery();

  return {
    userPromo: userPromo?.data.data,
  };
};

export const useGetUserTransaction = () => {
  const {
    data: userTransaction,
    isSuccess,
    isError,
  } = useGetUserTransactionQuery();

  return {
    userTransaction: userTransaction?.data?.data,
  };
};

export const useGetUserInfo = () => {
  const { data: userInfo, isSuccess, isError } = useGetUserInfoQuery();

  return {
    userInfo: userInfo?.data?.data,
  };
};
