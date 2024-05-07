'use client';
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaFacebookSquare,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

export const Footer = () => {
  return (
    <div className="h-[300px] text-white pt-10">
      <div className="bg-purple-500 py-5 w-full">
        <div className="grid-cols-2 grid gap-5 px-10 lg:px-[80px] lg:justify-center lg:grid lg:grid-cols-4 lg:m-10">
          <div>
            <ul>
              <span className="font-bold">About LESGOIN</span>
              <li>Log In</li>
              <li>Pricing</li>
              <li>Find Event</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div>
            
            <ul>
              <span className="font-bold">Create the Next Coolest Event</span>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor </li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
            </ul>
          </div>

          <div>
            <ul>
              <span className="font-bold">Event Location</span>
              <div className="text-[13px]">
                <li>JAKARTA</li>
                <li>BANDUNG</li>
                <li>YOGYAKARTA</li>
                <li>BALI</li>
                <li>SEMARANG</li>
                <li>SURABAYA</li>
                <li>BOGOR</li>
                <li>DEPOK</li>
                <li>TANEGRANG</li>
                <li>BEKASI</li>
              </div>
            </ul>
          </div>

          <div>
            <ul>
              <span className="font-bold">Event Inspirations</span>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor </li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center w-[250px] mx-auto text-3xl pt-5 lg:w-[400px]">
          <RiInstagramFill className="text-[35px]" />
          <FaTiktok />
          <FaXTwitter />
          <FaLinkedin />
          <FaYoutube className="text-[37px]" />
          <FaFacebookSquare />
        </div>
      </div>

      <div className="h-[50px] lg:h-[80px] bg-purple-800">
        <h1 className="text-center flex items-center justify-center h-full pb-2">
          © Copyright 2024 by Bogi & Wulan
        </h1>
      </div>
    </div>
  );
};
