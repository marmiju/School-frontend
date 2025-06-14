type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
type Category = 'teachers' | 'members' | 'staffs';
type Role = string;

export interface Person {
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
  image?: string;
  speech?: string;
}

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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
    speech: `আমি পাঁচগাছী বালিকা উচ্চ বিদ্যালয় প্রধান শিক্ষক হিসেবে আপনাদেরকে আমাদের স্কুল ওয়েবসাইটে স্বাগত জানাচ্ছি। এই ইউনিক প্লাটফর্মে আপনি প্রতিদিনের শিক্ষালীলা, আমাদের বিশেষ ঘটনা, এবং আমাদের ছাত্র-ছাত্রীদের জন্য প্রয়োজনীয় তথ্য পেয়ে যাবেন।

শিক্ষা একটি চলমান প্রক্রিয়া। শিক্ষার মাধ্যমে মানুষ বর্বরতার যুগকে পেরিয়ে আধুনিক সভ্যতার যুগে তথা আধুনিক প্রযুক্তির নেটওয়ার্কে পদার্পন করেছে। আধুনিক বিশ্বায়নের যুগে শিক্ষাকে আর গতিশীল ও প্রাণবন্ত করা প্রয়োজন। আমাদের শিক্ষার্থীদেরকে যদি নৈতিক শিক্ষাসহ দক্ষ জনশক্তিতে রূপান্তরিত করতে পারি তাহলে বঙ্গবন্ধু শেখ মজিবুর রহমানের স্বপ্নের সোনার বাংলা গড়তে আমরা সক্ষম হব।

আমাদের স্কুল একটি সম্প্রসারণশীল, বৈশ্বিক দৃষ্টিভঙ্গি এবং প্রযুক্তি উপযুক্ত পাঠশালা। এখানে ছাত্র-ছাত্রীরা শিক্ষা এবং সামাজিক পরিবেশে উন্নতির পথে ভূমিকা রাখে। আমাদের উদ্দেশ্য হলো তাদের নৈতিকভাবে উন্নত করে দেয়া, যাতে তারা উন্নত সমাজ তৈরি এবং নিজেকে সুপ্রতিষ্ঠিত করতে পারে।

আমাদের স্কুল পরিবেশে শিক্ষার্থীদের উজ্জ্বল ভবিষ্যত তৈরি করার লক্ষ্যে প্রতিশ্রুতিবদ্ধ রয়েছি।`
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
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
    image: 'https://i.ibb.co/zPXYVGZ/default-profile.png',
  }
];

 
const filteredStaff = staffList.filter((person) => person.category === cetagory);
  return filteredStaff
};

export default Administration;


