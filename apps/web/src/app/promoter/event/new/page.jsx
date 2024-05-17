'use client';
import { FormProvider } from '@/utils/formContext';
import EventForm from '@/components/promoter/eventForm';

export default function NewEventPage() {
  return (
    <div className="relative pt-[100px] h-full border-b border-b-purple-500 bg-[url(/confetti-doodles.svg)] pb-10">
      <FormProvider>
        <div className="flex justify-center items-center w-full bg-purple-100 h-[50px]">
          <h1 className="text-2xl">CREATE YOUR EVENT</h1>
        </div>
        <EventForm />
      </FormProvider>
    </div>
  );
}
