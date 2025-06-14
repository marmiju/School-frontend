import { randomFillSync } from "crypto";
import { RiFacebookFill } from "react-icons/ri";

type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

type Category = 'teachers' | 'members' | 'staffs';

type Role = string

interface Person {
  name: string;
  role: Role;
  category: Category;
  joinDate: string;
  birthDate: string;
  education: string;
  subjects?: string[];
  bloodGroup: BloodGroup;
  religion: string;
  address: string;
  phone: string;
  email?: string;
  experience?: string;
}
import React from 'react';

const Administration = ({cetagory}:{cetagory:string}) => {
  const staffList: Person[] = [
  {
    name: 'মোঃ মোজাফফর হোসেন',
    role: 'অফিস সহায়ক',
    category: 'staffs',
    joinDate: '1991-01-01',
    birthDate: '1968-06-27',
    education: 'এইচ, এস, সি',
    bloodGroup: 'O+',
    religion: 'ইসলাম',
    address: 'পাঁচগাছী বালিকা উচ্চ বিদ্যালয়',
    phone: '0146046872',
    email: '',
    experience: '',
  },
  {
    name: 'সাবিনা ইয়াসমিন',
    role: 'প্রধান শিক্ষক',
    category: 'teachers',
    joinDate: '2005-03-15',
    birthDate: '1975-08-21',
    education: 'মাস্টার্স (বাংলা)',
    subjects: ['বাংলা', 'নতুন পাঠ্যক্রম'],
    bloodGroup: 'A+',
    religion: 'ইসলাম',
    address: 'পাঁচগাছী, কুড়িগ্রাম',
    phone: '01712345678',
    email: 'sabina@example.com',
    experience: '১৫ বছরের প্রধান শিক্ষিকা হিসেবে অভিজ্ঞতা',
  },
  {
    name: 'মোঃ আব্দুল করিম',
    role: 'চেয়ারম্যান',
    category: 'members',
    joinDate: '2018-07-01',
    birthDate: '1962-05-10',
    education: 'স্নাতক',
    bloodGroup: 'B+',
    religion: 'ইসলাম',
    address: 'পাঁচগাছী ইউনিয়ন পরিষদ',
    phone: '01876543210',
    email: 'karim@example.com',
    experience: '৩ বছরের অভিজ্ঞতা বিদ্যালয় পরিচালনায়',
  },
  {
    name: 'রুহুল আমিন',
    role: 'সদস্য',
    category: 'members',
    joinDate: '2020-01-10',
    birthDate: '1970-03-05',
    education: 'এইচ. এস. সি',
    bloodGroup: 'AB+',
    religion: 'ইসলাম',
    address: 'পাঁচগাছী বাজার',
    phone: '01678901234',
    email: 'amin@example.com',
    experience: 'বিদ্যালয়ের ব্যবস্থাপনা কমিটিতে ২ বছরের অভিজ্ঞতা',
  },
  {
    name: 'শাহিনুর রহমান',
    role: 'সহকারী teacher',
    category: 'members',
    joinDate: '2010-06-01',
    birthDate: '1985-09-10',
    education: 'মাস্টার্স (গণিত)',
    subjects: ['গণিত', 'বিজ্ঞান'],
    bloodGroup: 'O-',
    religion: 'ইসলাম',
    address: 'পাঁচগাছী, কুড়িগ্রাম',
    phone: '01567890123',
    email: 'shahin@example.com',
    experience: '১০ বছরের teacherতা অভিজ্ঞতা',
  },
  {
    name: 'তাহমিনা আক্তার',
    role: 'লাইব্রেরিয়ান',
    category: 'staffs',
    joinDate: '2012-02-01',
    birthDate: '1982-11-11',
    education: 'ডিপ্লোমা ইন লাইব্রেরি সাইন্স',
    bloodGroup: 'A-',
    religion: 'ইসলাম',
    address: 'কুড়িগ্রাম সদর',
    phone: '01911123456',
    email: 'tahmina@example.com',
    experience: '১১ বছরের লাইব্রেরি পরিচালনার অভিজ্ঞতা',
  },
  {
    name: 'রফিকুল ইসলাম',
    role: 'ল্যাব সহকারী',
    category: 'staffs',
    joinDate: '2015-08-12',
    birthDate: '1990-02-22',
    education: 'ডিপ্লোমা ইন ইলেকট্রনিক্স',
    bloodGroup: 'B-',
    religion: 'ইসলাম',
    address: 'চিলমারী, কুড়িগ্রাম',
    phone: '01799887766',
    email: 'rafik@example.com',
    experience: '৮ বছরের ল্যাব সহকারীর অভিজ্ঞতা',
  },
  {
    name: 'আবুল কালাম আজাদ',
    role: 'শারীরিক শিক্ষা teacher',
    category: 'teachers',
    joinDate: '2008-05-01',
    birthDate: '1979-04-09',
    education: 'বিপিএড (শারীরিক শিক্ষা)',
    subjects: ['শারীরিক শিক্ষা'],
    bloodGroup: 'AB-',
    religion: 'ইসলাম',
    address: 'কুড়িগ্রাম সদর',
    phone: '01855443322',
    email: 'azad@example.com',
    experience: '১৫ বছরের অভিজ্ঞতা শারীরিক শিক্ষায়',
  },
  {
    name: 'মোছাঃ হাসিনা বেগম',
    role: 'হিসাবরক্ষক',
    category: 'staffs',
    joinDate: '2013-09-01',
    birthDate: '1980-12-15',
    education: 'বিএসসি (হিসাববিজ্ঞান)',
    bloodGroup: 'O+',
    religion: 'ইসলাম',
    address: 'পাঁচগাছী, কুড়িগ্রাম',
    phone: '01611223344',
    email: 'hasina@example.com',
    experience: '১০ বছরের হিসাব সংরক্ষণের অভিজ্ঞতা',
  }
];
 
  return staffList.map((person,index) => {
      return  person.category === cetagory
  })
};

export default Administration;


