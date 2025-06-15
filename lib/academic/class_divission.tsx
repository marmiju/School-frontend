interface ClassDivision {
    name: string;
    values: string[];
}

const class_divission = () => {
    const cl_dv:ClassDivision[] = [
        {
            name:"শ্রেনী সমুহ",
            values : [  '৬ষ্ঠ শ্রেনী', '৭ম শ্রেনী', '৮ম শ্রেনী', '৯ম শ্রেনী', '১০ম শ্রেনী' ]
        },
        {
            name:"বিভাগ ও শাখা সমূহ",
            values : [  'খ-শাখা', 'খ-শাখা', 'বিজ্ঞান', 'মানবিক', 'বাণিজ্য' ]
        },
    ]
    return cl_dv
};

export default class_divission;