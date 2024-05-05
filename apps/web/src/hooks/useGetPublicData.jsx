import { useGetAllPublishedEventsQuery } from '../api/usePublishedEventsQuery';

export const useGetAllPublishedEvents = () => {
  const {
    data: allPublishedEvents,
    isSuccess,
    isError,
  } = useGetAllPublishedEventsQuery();

  return {
    allPublishedEvents: allPublishedEvents?.data.data,
  };
};
