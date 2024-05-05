'use client';

import { Field } from "formik";
export default function SelectLocation() {
  return (
    <div className="relative h-10 min-w-[200px]">
    <Field
      as="select"
      name="location"
      placeholder=""
      className="peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all  empty:!bg-gray-500 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-500
      border border-black border-t-transparent placeholder-shown:border placeholder-shown:border-purple-500 placeholder-shown:border-t-purple-500 focus:border-purple-500">
      <option value="JAKARTA">JAKARTA</option>
      <option value="BANDUNG">BANDUNG</option>
      <option value="YOGYAKARTA">YOGYAKARTA</option>
      <option value="BALI">BALI</option>
      <option value="SEMARANG">SEMARANG</option>
      <option value="SURABAYA">SURABAYA</option>
      <option value="BOGOR">BOGOR</option>
      <option value="DEPOK">DEPOK</option>
      <option value="TANGERANG">TANGERANG</option>
      <option value="BEKASI">BEKASI</option>
    </Field>
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-purple-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
      Select Location
    </label>
  </div>
  );
}
