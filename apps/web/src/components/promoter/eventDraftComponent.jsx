import { usePublishEvent } from '@/hooks/promoter/useEvent';
import Image from 'next/image';
export default function EventDraftComponent({
  ticketId,
  name,
  createdAt,
  imageLink,
  isPublished,
}) {
  const { mutationPublishEvent } = usePublishEvent();
  const handleClick = (id) => {
    
    mutationPublishEvent(id);
  };

  return (
    <div className="w-[300px] h-auto p-6 border">
      {/* <div className="w-[100%] h-[200px] rounded-xl bg-pink-200"></div> */}
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${imageLink}`}
        width={100}
        height={100}
        alt="Image"
        className="w-[100%] h-[200px] rounded-xl"
      ></Image>
      <div className="text-xl">{name}</div>
      <div>Created at: {new Date(createdAt).toDateString()}</div>
      {isPublished ? (
        <div className="p-2 rounded-full border">Published</div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="p-2 rounded-full border">Edit</div>
          <div
            onClick={() => handleClick(ticketId)}
            className="p-2 rounded-full border hover:cursor-pointer"
          >
            Publish
          </div>
        </div>
      )}
    </div>
  );
}
