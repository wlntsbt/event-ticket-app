import {
  useGetUserPromoQuery,
  useGetUserTransactionQuery,
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
