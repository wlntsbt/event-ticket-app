import {
  useCreateEventMutation,
  useGetAllEventsQuery,
  usePublishEventMutation,
} from '../../api/promoter/useEventMutation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useCreateEvent = () => {
  const router = useRouter();
  const { mutate: mutationCreateEvent } = useCreateEventMutation({
    onSuccess: (res) => {
      console.log(res?.data);
      toast.success(res?.data.message);
      router.push('/promoter/event');
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
  const router = useRouter();
  const { mutate: mutationPublishEvent } = usePublishEventMutation({
    onSuccess: (res) => {
      console.log(res);
      toast.success(res?.data?.message);
      router.refresh();
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
