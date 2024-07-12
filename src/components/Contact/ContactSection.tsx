'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import Title from '../Title';
import img from '../../assets/images/contact.jpg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_8nl1fkf', 'template_xkm17o7', e.target as HTMLFormElement, 'mEfI7WJ6M7AXPsWvJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="lien-he" className="w-full py-20 px-5 lg:px-0">
      <Title title="Liên Hệ" des="Chuyên môn" />
      <hr className="border-[#222222] border-solid border-t-2 w-full" />
      <div className="w-full pt-20">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-10">
          <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
            <Image
              className="w-full h-96 object-cover rounded-lg mb-2"
              src={img}
              alt="nlthContact"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-[#444444]">Nguyễn Lê Thanh Hải</h3>
              <p className="text-lg font-normal text-[#444444]">Th.s Đạo diễn - Biên đạo</p>
              <p className="text-base text-[#444444] flex items-center gap-2">
                Email: <span className="">noor.jsdivs@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="w-full lgl:w-[65%] h-full py-10 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-[#444444] uppercase tracking-wide">Họ tên</p>
                  <input className="contactInput" type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-[#444444] uppercase tracking-wide">Số điện thoại</p>
                  <input className="contactInput" type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-[#444444] uppercase tracking-wide">Email</p>
                <input className="contactInput" type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-[#444444] uppercase tracking-wide">Lời nhắn</p>
                <textarea className="contactTextArea" cols={30} rows={8} name="message" value={formData.message} onChange={handleChange} />
              </div>
              <div className="w-full">
                <button className="w-full h-12 bg-slate-50 rounded-lg text-base text-[#444444] tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                  Gửi liên hệ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
