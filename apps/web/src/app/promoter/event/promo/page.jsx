'use client';
import { FormProvider } from '@/utils/formContext';
import PromoForm from '@/components/promoter/promoForm';

export default function CreatePromoPage() {
  return (
    <div className="relative pt-[100px] h-full border-b border-b-purple-500 bg-[url(/confetti-doodles.svg)] pb-10">
      <FormProvider>
        <div className="flex justify-center items-center w-full bg-purple-100 h-[50px]">
          <h1 className="text-2xl">CREATE YOUR EVENT</h1>
        </div>
        <PromoForm />
      </FormProvider>
    </div>
  );
}
