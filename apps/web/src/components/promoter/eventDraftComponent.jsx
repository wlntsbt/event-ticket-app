import { usePublishEvent } from '@/hooks/promoter/useEvent';
import { FiEdit } from "react-icons/fi";
import { BsPatchCheck } from "react-icons/bs";
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
    <div className="w-[350px] border rounded-xl my-5 overflow-hidden lg:w-[400px]">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${imageLink}`}
        width={100}
        height={100}
        unoptimized={true}
        alt="Event Image"
        className="w-[100%] h-[200px] rounded-t-xl"
      ></Image>
      <div className='p-3'>
      <h1 className="text-xl">{name}</h1>
      <div>Created at: {new Date(createdAt).toDateString()}</div>
      </div>
      {isPublished ? (
        <p className="p-3 text-purple-400 flex items-center gap-2" title='Status'><BsPatchCheck /> Published</p>
      ) : (
        <div className="flex flex-col gap-3 m-4">
          <button className="border-purple-500 border-2 relative h-12 rounded-full hover:border-purple-500 text-purple-500 hover:bg-purple-100">
            <span className="font-medium flex h-full justify-center items-center gap-2">
            <FiEdit />
              EDIT
            </span>
          </button>

          <button
            onClick={() => handleClick(ticketId)}
            type="submit"
            className="font-bold w-full relative bg-purple-500 rounded-full h-12 before:absolute before:inset-0 before:bg-purple-300 before:scale-x-0 before:origin-top before:transition before:duration-100 hover:before:scale-x-100 hover:before:origin-bottom before:rounded-full"
          >
            <span className="relative text-white tracking-widest">
              PUBLISH NOW
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
