'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PromoterMenuBar from '@/components/promoter/menuBar';
import Link from 'next/link';
import { Formik, Form, Field, useFormikContext } from 'formik';
import CreateTicket from '../../../../components/promoter/ticketForm';
import { FormProvider } from '@/utils/formContext';
import EventForm from '@/components/promoter/eventForm';

export default function PromoterPage() {
  return (
    <div className="pt-32">
      <FormProvider>
        <div>CREATE EVENT</div>
        <EventForm></EventForm>
        <div className="w-[50vw] mx-12"></div>
      </FormProvider>
    </div>
  );
}
