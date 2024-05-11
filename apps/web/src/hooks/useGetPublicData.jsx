import {
  useGetAllPublishedEventsQuery,
  useGetPublishedEventQuery,
} from '../api/usePublishedEventsQuery';

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

export const useGetPublishedEvent = (id) => {
  const {
    data: publishedEvent,
    isSuccess,
    isError,
  } = useGetPublishedEventQuery(id);

  return {
    publishedEvent: publishedEvent?.data.data,
  };
};
