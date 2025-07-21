'use client'

import React, { useState } from "react";
import InputBox from "../components/inputBox/InputBox";

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        father: '',
        mother: '',
        dateOfBirth: '',
        blood: '',
        guardianPhone: '',
        Phone: '',
        nationality: '',
        religion: '',
        birthCertificate: '',
        class: '',
        guardianName: '',
        pastShool: '',
        presentAddress: '',
        postOffice: '',
        dristict: '',
        upazilla: '',
        parmanentAddress: '',
        parmanentPostOffice: '',
        parmanentUpazilla: '',
        parmanentDistrict: '',
        terms: false
    })

    // handle Submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.terms) {

        }
    }


    // handle chenge
    const handleChege = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="max-w-[1280px] mx-auto text-text py-10 ">
            <form onSubmit={handleSubmit} className="p-4 overflow-auto">
                <InputBox className="w-full" name="name" onChange={handleChege} value={formData.name} label="শিক্ষার্থির নাম" required={true} type="text" />
                <div className=" grid md:flex w-full gap-2">
                    <InputBox name="father" onChange={handleChege} className="w-full md:w-1/2" value={formData.father} label="পিতার নাম" required={true} type="text" />
                    <InputBox name="mother" onChange={handleChege} className="w-full md:w-1/2" value={formData.mother} label="মাতার নাম" required={true} type="text" />
                </div>
                <div className="flex gap-2">
                    <InputBox className="w-1/2" name="dateOfBirth" onChange={handleChege} value={formData.dateOfBirth} label="জন্মদিন" required={true} type="date" />
                    <InputBox className="w-1/2" name="blood" onChange={handleChege} value={formData.blood} label="ব্লাড গ্রুপ" required={true} type="text" />
                </div>
                {/* guardian */}
                <div className="flex gap-2 w-full items-between">
                    <InputBox name="guardianPhone" onChange={handleChege} value={formData.guardianPhone} label="অভিভাবকের ফোন নাম্বার" required={true} type="text" />
                    <InputBox name="Phone" onChange={handleChege} value={formData.Phone} label="স্টুডেন্ট ফোন নাম্বার" required={true} type="text" />
                    {/* nationality select */}
                    <div className="space-y-[2px]">
                        <p>জাতিয়তা ®</p>
                        <select name="nationality" id="nationality" className="border p-1.5 rounded">
                            <option value="bangladeshi">বাংলাদেশি</option>
                            <option value="others">অন্যান্য</option>
                        </select>
                    </div>
                </div>
                {/* religion birth certificate*/}
                <div className="flex gap-2">
                    <InputBox className=" w-1/2" name="religion" onChange={handleChege} value={formData.religion} label="ধর্ম" required={true} type="text" />
                    <InputBox className=" w-1/2" name="birthCertificate" onChange={handleChege} value={formData.birthCertificate} label="জন্মনিবন্ধনের নম্বর" required={true} type="text" />
                </div>
                {/*  religion birth certificate*/}
                <div className="flex gap-2">
                    <InputBox className=" w-1/2" name="class" onChange={handleChege} value={formData.class} label="যে শ্রেনীতে ভর্তি হতে ইচ্ছুক" required={true} type="text" />
                    <InputBox className=" w-1/2" name="guardianName" onChange={handleChege} value={formData.guardianName} label="অভিভাবকের নাম" required={true} type="text" />
                </div>
                <InputBox className="w-full" name="pastShool" onChange={handleChege} value={formData.pastShool} label="পূর্বে যে বিদ্যালয়ে এবং শ্রেণিতে অধ্যায়ন করিত" required={false} type="text" />
                {/* present  Adrress*/}
                <div className="flex flex-wrap justify-between">
                    <InputBox className="w-full md:w-[40%]" name="presentAddress" onChange={handleChege} value={formData.presentAddress} label=" বর্তমান ঠিকানা" required={true} type="text" />
                    <InputBox className="w-[30%] md:w-[15%]" name="postOffice" onChange={handleChege} value={formData.postOffice} label="ডাকঘর" required={true} type="text" />
                    <InputBox className="w-[30%] md:w-[15%]" name="upazilla" onChange={handleChege} value={formData.upazilla} label="উপজেলা" required={true} type="text" />
                    <InputBox className="w-[30%] md:w-[15%]" name="dristict" onChange={handleChege} value={formData.dristict} label="জেলা" required={true} type="text" />
                </div>

                {/* Past address */}
                <div className="flex flex-wrap justify-between">
                    <InputBox className="w-full md:w-[40%]" name="parmanentAddress" onChange={handleChege} value={formData.parmanentAddress} label="স্থায়ী ঠিকানা" required={true} type="text" />
                    <InputBox className="w-[30%] md:w-[15%]" name="parmanentPostOffice" onChange={handleChege} value={formData.parmanentPostOffice} label=" ডাকঘর" required={true} type="text" />
                    <InputBox className="w-[30%] md:w-[15%]" name="parmanentUpazilla" onChange={handleChege} value={formData.parmanentUpazilla} label=" উপজেলা" required={true} type="text" />
                    <InputBox className="w-[30%] md:w-[15%]" name="parmanentDistrict" onChange={handleChege} value={formData.parmanentDistrict} label=" জেলা" required={true} type="text" />
                </div>
                <p className="gap-2">
                    <input type="checkbox" required={true} /> <span> অভিভাবকের অঙ্গীকার</span>
                </p>

                <p className="p-4 bg-secondary my-2">
                    এই মর্মে অঙ্গীকার করিতেছি যে, আমার ছেলে/মেয়ে অত্র প্রতিষ্ঠানের সকল নিয়ম কানুন সম্পূর্ণভাবে জানিয়া ভর্তি করাইতে ইচ্ছুক। আমার প্রেরিত শিক্ষার্থী দ্বারা অত্র বিদ্যালয়ে কোন প্রকার বিঘ্ন ঘটিলে বা আইন শৃঙ্খলা ভঙ্গের কারণ ‍সৃষ্টি হইলে আইনগত যে কোন নির্দেশ মানিয়া নিতে বাধ্য থাকিব। আরও প্রতিজ্ঞা করিতেছি যে, উপরে উল্লিখিত সকল বিবরণ সত্য ও নির্ভূল। শিক্ষার্থীর জন্য প্রতিমাসে অন্তত একবার প্রতিষ্ঠানে আসিয়া তার খোঁজ খবর/পাঠদানের মূল্যায়ন সম্পর্কে অবহিত হইব।এই মর্মে অঙ্গীকার করিতেছি যে, আমার ছেলে/মেয়ে অত্র প্রতিষ্ঠানের সকল নিয়ম কানুন সম্পূর্ণভাবে জানিয়া ভর্তি করাইতে ইচ্ছুক। আমার প্রেরিত শিক্ষার্থী দ্বারা অত্র বিদ্যালয়ে কোন প্রকার বিঘ্ন ঘটিলে বা আইন শৃঙ্খলা ভঙ্গের কারণ ‍সৃষ্টি হইলে আইনগত যে কোন নির্দেশ মানিয়া নিতে বাধ্য থাকিব। আরও প্রতিজ্ঞা করিতেছি যে, উপরে উল্লিখিত সকল বিবরণ সত্য ও নির্ভূল। শিক্ষার্থীর জন্য প্রতিমাসে অন্তত একবার প্রতিষ্ঠানে আসিয়া তার খোঁজ খবর/পাঠদানের মূল্যায়ন সম্পর্কে অবহিত হইব।
                </p>

                <button className="text-background bg-text px-10 rounded cursor-pointer py-2" type="submit">Submit</button>



            </form>
        </div>
    )
}

export default Page;



