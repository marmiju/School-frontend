import React from 'react'
import Hero from '../components/hero/Hero'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'

const page = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
        <Hero title='যোগাযোগ'/> 
         <div className="bg-primary/10 rounded-xl p-6 max-w-[1200px]  mx-auto text-text shadow-md">
      <h2 className="text-2xl font-bold mb-4">কালীগঞ্জ মহাবিদ্যালয়</h2>
      <p className="mb-2">
        আমাদের ঠিকানা: গ্রাম: মাধাইখাল, ডাকঘর: শালমারা, <br />
        নাগেশ্বরী, কুড়িগ্রাম
      </p>
      <p className="mb-2">মোবাইল: 01309122459</p>
      <p className="mb-4">ইমেইল: kaligonjcollege@gmail.com</p>

      <div className="flex gap-4 text-2xl text-primary">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </div>
      
    </div>
  )
}

export default page
