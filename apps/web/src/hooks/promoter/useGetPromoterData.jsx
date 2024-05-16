import { useGetPromoterInfoQuery } from '../../api/promoter/usePromoterQuery';

export const useGetPromoterInfo = () => {
  const { data: promoterInfo, isSuccess, isError } = useGetPromoterInfoQuery();

  return {
    promoterInfo: promoterInfo?.data?.data,
  };
};
