import {
  useCreateEventMutation,
  useGetAllEventsQuery,
  usePublishEventMutation,
} from '../../api/promoter/useEventMutation';
import { toast } from 'react-toastify';

export const useCreateEvent = () => {
  const { mutate: mutationCreateEvent } = useCreateEventMutation({
    onSuccess: (res) => {
      console.log(res?.data);
      toast.success(res?.data.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return {
    mutationCreateEvent,
  };
};

export const useGetAllEvents = () => {
  const { data: allEventsData, isSuccess, isError } = useGetAllEventsQuery();

  return {
    allEventsData: allEventsData?.data.data,
  };
};

export const usePublishEvent = () => {
  const { mutate: mutationPublishEvent } = usePublishEventMutation({
    onSuccess: (res) => {
      console.log(res);
      toast.success(res?.data?.message);
    },
    onError: (err) => {
      console.log(err);
      toast.err(err?.message);
    },
  });

  return {
    mutationPublishEvent,
  };
};
